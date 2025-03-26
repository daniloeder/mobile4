import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import { COLORS } from '../../styles/theme';
import Icon from '../ui/Icon';

const WalletSetup = () => {
  const [showAddress, setShowAddress] = useState(false);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <NavHeader title="Wallet Setup" onBack={handleBack} />
      
      <View style={styles.content}>
        {/* Wallet icon */}
        <View style={styles.walletIconContainer}>
          <Icon name="wallet" size={50} color={COLORS.gold} />
        </View>
        
        <Text style={styles.instructionText}>
          Choose how you want to set up your wallet to start trading digital collectibles
        </Text>
        
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.optionCard}
            onPress={() => setShowAddress(true)}
          >
            <View style={styles.optionIconContainer}>
              <Icon name="import" size={24} color={COLORS.gold} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Import Wallet</Text>
              <Text style={styles.optionDescription}>Using seed phrase</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.optionCard}
            onPress={() => setShowAddress(true)}
          >
            <View style={styles.optionIconContainer}>
              <Icon name="link" size={24} color={COLORS.gold} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Connect Phantom/Solflare</Text>
              <Text style={styles.optionDescription}>External wallet connection</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {showAddress && (
          <View style={styles.addressContainer}>
            <View style={styles.addressCard}>
              <View style={styles.addressHeader}>
                <Text style={styles.addressLabel}>Wallet Address</Text>
                <TouchableOpacity>
                  <Icon name="copy" size={20} color={COLORS.gold} />
                </TouchableOpacity>
              </View>
              <Text style={styles.addressValue}>Fx195p...if6</Text>
            </View>
            <CustomButton 
              title="Continue" 
              onPress={handleContinue}
              style={styles.continueButton} 
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
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
    gap: 16,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  optionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#463F1F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  optionDescription: {
    color: '#999',
    fontSize: 14,
  },
  addressContainer: {
    width: '100%',
    marginTop: 'auto',
    paddingTop: 32,
  },
  addressCard: {
    backgroundColor: '#17171F',
    borderRadius: 12,
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