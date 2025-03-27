
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import WalletOption from '../ui/WalletOption';
import Icon from '../ui/Icon';
import { COLORS, BORDER_RADIUS, FONT_SIZE } from '../../styles/theme';

const WalletSetup = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [walletType, setWalletType] = useState(null);
  const [copied, setCopied] = useState(false);
  
  const navigation = useNavigation();
  
  const mockWalletAddress = "Fx195pCexVzpWikyU6nPPqw8j3xQbacif6";
  
  const handleBack = () => {
    navigation.goBack();
  };
  
  const handleComplete = () => {
    navigation.navigate('Main' as never);
  };
  
  const handleCopyAddress = () => {
    // In a real app, you would use Clipboard from react-native or expo
    setCopied(true);
    
    // Reset copied status after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };
  
  const selectWalletOption = (type) => {
    setWalletType(type);
    setShowAddress(true);
  };
  
  return (
    <View style={styles.container}>
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
        
        {showAddress && (
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
              <Text style={styles.addressValue}>{mockWalletAddress}</Text>
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
