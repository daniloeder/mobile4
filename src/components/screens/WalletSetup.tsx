import 'react-native-get-random-values'
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Image, TextInput } from 'react-native';
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
global.Buffer = Buffer;
import * as Linking from "expo-linking";
import { sendSolToServer } from '../../utils/transactions';
import { createTokenMetadata, loginUser, useSignTransaction } from '../../utils/api';

const NETWORK = clusterApiUrl('mainnet-beta');
const SERVER_WALLET = "E1umqMDwUmQGGe4t6FAH6kGZCJyEGk1t3RrL7GPLMfkp";

// Phantom wallet link setup
const onConnectRedirectLink = Linking.createURL('onConnect');
const onDisconnectRedirectLink = Linking.createURL('onDisconnect');

// SOL amount options
const amountList = [0.5, 0.1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

const WalletSetup = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [walletType, setWalletType] = useState(null);
  const [copied, setCopied] = useState(false);
  const [phantomWalletPublicKey, setPhantomWalletPublicKey] = useState<PublicKey>();
  const [session, setSession] = useState<string>();
  const [sharedSecret, setSharedSecret] = useState<Uint8Array>();
  const [dappKeyPair] = useState(nacl.box.keyPair());
  
  // Token creation states
  const [tokenInfos, setTokenInfos] = useState({
    name: "",
    symbol: "",
    solAmount: 0,
    imgUri: "",
    category: "category"
  });

  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [isMintingToken, setIsMintingToken] = useState(false);
  const [currentSection, setCurrentSection] = useState("wallet"); // Options: wallet, token

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

  // Handle token info changes
  const handleChangeTokenInfo = (value: string, type: string) => {
    setTokenInfos((prev) => ({ ...prev, [type]: value }));
  };

  // Handle SOL amount selection
  const handleSelectSolAmount = (amount: number) => {
    setTokenInfos((prev) => ({ ...prev, solAmount: amount }));
  };

  // Generate image for token
  const handleGenerateImage = async () => {
    if (!tokenInfos.name || !tokenInfos.symbol || !phantomWalletPublicKey) {
      return;
    }

    try {
      setIsGeneratingImage(true);
      const body = {
        name: tokenInfos.name,
        symbol: tokenInfos.symbol,
        category: tokenInfos.category
      };
      console.log('a', body)
      const response = await createTokenMetadata(body);
      console.log('b', response)

      if (response.success) {
        setTokenInfos((prev) => ({ ...prev, imgUri: response.image }));
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // Get the `signTransaction` function from the hook
  const { signTransaction } = useSignTransaction();

  // Mint token
  const handleMintToken = async () => {
    if (
      !tokenInfos.name ||
      !tokenInfos.symbol ||
      !phantomWalletPublicKey ||
      !tokenInfos.imgUri ||
      !tokenInfos.solAmount
    ) {
      return;
    }

    try {
      setIsMintingToken(true);
      const serverWalletPubKey = new PublicKey(SERVER_WALLET);

      // Prepare the session and sharedSecret, which will be required by signTransaction
      const session = "your_session_id"; // This should be dynamically set based on your session management
      const sharedSecret = new Uint8Array(); // Replace with actual shared secret logic

      // Call signTransaction to sign the transaction
      const signedTransaction = await signTransaction(phantomWalletPublicKey, session, sharedSecret);

      if (!signedTransaction) {
        throw new Error("Transaction signing failed");
      }

      // Now, send the signed transaction to your backend
      const response = await fetch("http://192.168.0.118:5000/api/v1/ico/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: tokenInfos.name,
          symbol: tokenInfos.symbol,
          uri: tokenInfos.imgUri,
          supply: tokenInfos.solAmount,
          confirmTransaction: signedTransaction, // Send the signed transaction here
        }),
      });

      const result = await response.json();
      console.log("Mint result:", result);

      // Reset form after successful minting
      if (result.success) {
        setTokenInfos({
          name: "",
          symbol: "",
          solAmount: 0,
          imgUri: "",
          category: "category",
        });
        // Maybe navigate to a success screen or show token list
      }
    } catch (error) {
      console.error("Error minting token:", error);
    } finally {
      setIsMintingToken(false);
    }
  };
  

  // Login user after connecting wallet
  const performLogin = useCallback(async () => {
    if (!phantomWalletPublicKey) return;
    
    try {
      console.log("Logging in with wallet:", phantomWalletPublicKey.toBase58());
      const res = await loginUser(phantomWalletPublicKey.toBase58());
      if (!res.success) {
        // Handle unsuccessful login
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }, [phantomWalletPublicKey]);

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

  useEffect(() => {
    if (phantomWalletPublicKey) {
      performLogin();
    }
  }, [phantomWalletPublicKey, performLogin]);

  const renderWalletSetup = () => (
    <>
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
          
          <View style={styles.actions}>
            <CustomButton
              title="Continue"
              onPress={handleComplete}
              style={styles.button}
            />
            <CustomButton
              title="Create Token"
              onPress={() => setCurrentSection("token")}
              style={[styles.button, styles.secondaryButton]}
              textStyle={styles.secondaryButtonText}
            />
          </View>
        </View>
      )}
    </>
  );

  const renderTokenCreation = () => (
    <>
      <View style={styles.tokenCreationHeader}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => setCurrentSection("wallet")}
        >
          <Icon name="arrow-left" size={24} color={COLORS.gold} />
        </TouchableOpacity>
        <Text style={styles.tokenCreationTitle}>Create New Token</Text>
      </View>

      <View style={styles.tokenForm}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Token Name</Text>
          <TextInput
            style={styles.input}
            value={tokenInfos.name}
            onChangeText={(value) => handleChangeTokenInfo(value, "name")}
            placeholder="Enter token name"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Symbol</Text>
          <TextInput
            style={styles.input}
            value={tokenInfos.symbol}
            onChangeText={(value) => handleChangeTokenInfo(value, "symbol")}
            placeholder="Enter token symbol"
            placeholderTextColor="#666"
          />
        </View>

        <Text style={styles.inputLabel}>SOL Amount</Text>
        <View style={styles.amountButtons}>
          {amountList.map((amount, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.amountButton,
                tokenInfos.solAmount === amount && styles.amountButtonActive
              ]}
              onPress={() => handleSelectSolAmount(amount)}
            >
              <Text style={[
                styles.amountButtonText,
                tokenInfos.solAmount === amount && styles.amountButtonTextActive
              ]}>
                {amount}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <CustomButton
          title={isGeneratingImage ? "Generating..." : "Generate Image"}
          onPress={handleGenerateImage}
          disabled={!tokenInfos.name || !tokenInfos.symbol || !phantomWalletPublicKey || isGeneratingImage}
          style={[styles.button, styles.generateButton]}
        />

        {tokenInfos.imgUri ? (
          <View style={styles.imagePreviewContainer}>
            <Text style={styles.previewLabel}>Preview</Text>
            <Image 
              source={{ uri: tokenInfos.imgUri }} 
              style={styles.tokenImage} 
              resizeMode="contain"
            />
          </View>
        ) : null}

        <CustomButton
          title={isMintingToken ? "Minting..." : "Mint Token"}
          onPress={handleMintToken}
          disabled={!tokenInfos.name || !tokenInfos.symbol || !phantomWalletPublicKey || !tokenInfos.imgUri || !tokenInfos.solAmount || isMintingToken}
          style={[styles.button, styles.mintButton]}
        />
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavHeader 
        title={currentSection === "wallet" ? "Wallet Setup" : "Create Token"} 
        onBack={handleBack} 
      />

      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
      >
        {currentSection === "wallet" ? renderWalletSetup() : renderTokenCreation()}
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
    paddingBottom: 40,
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
    marginBottom: 16,
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
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  continueButton: {
    marginTop: 16,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  secondaryButtonText: {
    color: COLORS.gold,
  },
  tokenCreationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
    marginTop: 16,
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  tokenCreationTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  tokenForm: {
    width: '100%',
    alignItems: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 16,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    width: '100%',
    backgroundColor: '#17171F',
    borderRadius: BORDER_RADIUS.md,
    padding: 12,
    color: 'white',
    fontSize: 16,
  },
  amountButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  amountButton: {
    backgroundColor: '#17171F',
    borderRadius: BORDER_RADIUS.sm,
    padding: 12,
    width: '18%',
    alignItems: 'center',
    marginBottom: 10,
  },
  amountButtonActive: {
    backgroundColor: COLORS.gold,
  },
  amountButtonText: {
    color: 'white',
  },
  amountButtonTextActive: {
    color: 'black',
  },
  generateButton: {
    marginVertical: 16,
    width: '100%',
  },
  mintButton: {
    marginVertical: 16,
    width: '100%',
    backgroundColor: COLORS.gold,
  },
  imagePreviewContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 16,
  },
  previewLabel: {
    color: 'white',
    marginBottom: 8,
    fontSize: 16,
  },
  tokenImage: {
    width: 200,
    height: 200,
    borderRadius: 16,
    backgroundColor: '#17171F',
  }
});

export default WalletSetup;