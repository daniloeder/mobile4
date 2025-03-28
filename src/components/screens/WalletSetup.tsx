import 'react-native-get-random-values'
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import WalletOption from '../ui/WalletOption';
import Icon from '../ui/Icon';
import { COLORS, BORDER_RADIUS, FONT_SIZE } from '../../styles/theme';
import { clusterApiUrl, Connection, PublicKey, Transaction } from "@solana/web3.js";
import { StatusBar } from 'expo-status-bar';
import nacl from "tweetnacl";
import bs58 from 'bs58';
import { Buffer } from "buffer";
import * as Linking from "expo-linking";

const NETWORK = clusterApiUrl('mainnet-beta');

// Phantom wallet link setup
const onConnectRedirectLink = Linking.createURL('onConnect');
const onDisconnectRedirectLink = Linking.createURL('onDisconnect');

const WalletSetup = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [walletType, setWalletType] = useState(null);
  const [copied, setCopied] = useState(false);
  const [phantomWalletPublicKey, setPhantomWalletPublicKey] = useState<PublicKey>();
  const [session, setSession] = useState<string>();
  const [sharedSecret, setSharedSecret] = useState<Uint8Array>();
  const [dappKeyPair] = useState(nacl.box.keyPair());

  const navigation = useNavigation();

  const connection = new Connection(NETWORK);

  const addLog = useCallback((log: string) => {
    console.log(log); // Logging for debugging
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleComplete = () => {
    navigation.navigate('Main');
  };

  const handleCopyAddress = () => {
    if (phantomWalletPublicKey) {
      Clipboard.setString(phantomWalletPublicKey.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const selectWalletOption = (type: string) => {
    if (type === 'connect') {
      connect();
    }
    setWalletType(type);
    setShowAddress(true);
  };

  const connect = async () => {
    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      cluster: "mainnet-beta",
      app_url: "https://phantom.app",
      redirect_link: onConnectRedirectLink,
    });

    const url = buildUrl('connect', params);
    Linking.openURL(url);
  };

  const buildUrl = (path: string, params: URLSearchParams) =>
    `phantom://v1/${path}?${params.toString()}`;

  const decryptPayload = (data: string, nonce: string, sharedSecret?: Uint8Array) => {
    if (!sharedSecret) throw new Error('missing shared secret');
    const decryptedData = nacl.box.open.after(bs58.decode(data), bs58.decode(nonce), sharedSecret);
    if (!decryptedData) {
      throw new Error('Unable to decrypt data');
    }
    return JSON.parse(Buffer.from(decryptedData).toString('utf8'));
  };

  useEffect(() => {
    const handleDeepLink = ({ url }: { url: string }) => {
      const deepLinkUrl = new URL(url);
      const params = deepLinkUrl.searchParams;

      if (params.get('errorCode')) {
        addLog(JSON.stringify(Object.fromEntries([...params]), null, 2));
        return;
      }

      if (/onConnect/.test(deepLinkUrl.pathname || deepLinkUrl.host)) {
        const sharedSecretDapp = nacl.box.before(
          bs58.decode(params.get('phantom_encryption_public_key')!),
          dappKeyPair.secretKey
        );

        const connectData = decryptPayload(
          params.get('data')!,
          params.get('nonce')!,
          sharedSecretDapp
        );

        setSharedSecret(sharedSecretDapp);
        setSession(connectData.session);
        setPhantomWalletPublicKey(new PublicKey(connectData.public_key));
        addLog(JSON.stringify(connectData, null, 2));
      }
    };

    const init = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) handleDeepLink({ url: initialUrl });
    };

    init();
    const subscription = Linking.addEventListener('url', handleDeepLink);
    return () => {
      subscription.remove();
    };
  }, [dappKeyPair.secretKey]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavHeader title="Wallet Setup" onBack={handleBack} />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Wallet icon */}
        <View style={styles.walletIconContainer}>
          <Icon name="wallet" size={50} color={COLORS.gold} />
        </View>

        <Text style={styles.instructionText}>
          Choose how you want to set up your wallet to start trading digital collectibles
        </Text>

        <View style={styles.optionsContainer}>
          <WalletOption
            icon={<Icon name="link" size={24} color={COLORS.gold} />}
            title="Connect Phantom/Solflare"
            description="External wallet connection"
            onPress={() => selectWalletOption('connect')}
            active={walletType === 'connect'}
          />
        </View>

        {showAddress && phantomWalletPublicKey && (
          <View style={styles.addressContainer}>
            <View style={styles.addressCard}>
              <View style={styles.addressHeader}>
                <Text style={styles.addressLabel}>Wallet Address</Text>
                <TouchableOpacity onPress={handleCopyAddress}>
                  {copied ? (
                    <Icon name="check-circle" size={20} color={COLORS.gold} />
                  ) : (
                    <Icon name="copy" size={20} color={COLORS.gold} />
                  )}
                </TouchableOpacity>
              </View>
              <Text style={styles.addressValue}>{phantomWalletPublicKey.toString()}</Text>
            </View>

            <CustomButton
              title="Continue"
              onPress={handleComplete}
              style={styles.continueButton}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    alignItems: 'center',
  },
  walletIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  instructionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 24,
  },
  addressContainer: {
    width: '100%',
    marginTop: 'auto',
    paddingTop: 32,
  },
  addressCard: {
    backgroundColor: '#17171F',
    borderRadius: BORDER_RADIUS.lg,
    padding: 16,
    marginBottom: 8,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressLabel: {
    color: '#999',
  },
  addressValue: {
    color: COLORS.gold,
    fontWeight: '500',
    marginTop: 4,
  },
  continueButton: {
    marginTop: 16,
  },
});

export default WalletSetup;