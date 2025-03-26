import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import { COLORS } from '../../styles/theme';
import Icon from '../ui/Icon';

const FlexShareScreen = () => {
  const navigation = useNavigation();
  const [showWalletAddress, setShowWalletAddress] = useState(true);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <NavHeader title="Flex Share" onBack={handleBack} />
      
      <View style={styles.content}>
        <View style={styles.infoCard}>
          <Icon name="sparkles" size={24} color={COLORS.gold} />
          <Text style={styles.infoText}>
            Create a shareable image to show off your gains on this token
          </Text>
        </View>
        
        <View style={styles.shareCardContainer}>
          <View style={styles.shareCard}>
            <View style={styles.collectibleTag}>
              <Text style={styles.collectibleTagText}>Collectible</Text>
            </View>
            
            <View style={styles.tokenContainer}>
              <Text style={styles.tokenSymbol}>$ELON</Text>
            </View>
            
            <Text style={styles.tokenName}>Elon Musk</Text>
            <Text style={styles.tokenSymbolText}>$ELON</Text>
            
            <Text style={styles.tokenGain}>+5.32% in 24h!</Text>
            
            <Text style={styles.mintedText}>Minted on StreetX</Text>
            <Text style={styles.walletText}>Fx8d37...29qP</Text>
          </View>
        </View>
        
        <View style={styles.customizeSection}>
          <View style={styles.sectionHeader}>
            <Icon name="palette" size={24} color={COLORS.gold} />
            <Text style={styles.sectionTitle}>Customize Your Flex</Text>
          </View>
          
          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.customizeButton}>
              <Text style={styles.customizeButtonText}>Change Background</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.customizeButton}>
              <Text style={styles.customizeButtonText}>Random Gain %</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.toggleRow}>
            <View>
              <Text style={styles.toggleTitle}>Show Wallet Address</Text>
              <Text style={styles.toggleSubtitle}>Display your wallet as watermark</Text>
            </View>
            <Switch
              value={showWalletAddress}
              onValueChange={setShowWalletAddress}
              trackColor={{ false: '#3e3e3e', true: COLORS.gold }}
              thumbColor="#fff"
            />
          </View>
        </View>
        
        <View style={styles.shareSection}>
          <View style={styles.sectionHeader}>
            <Icon name="share" size={24} color={COLORS.gold} />
            <Text style={styles.sectionTitle}>Share Your Flex</Text>
          </View>
          
          <CustomButton
            title="Save Image"
            icon="download"
            onPress={() => {}}
            style={styles.saveButton}
          />
          
          <TouchableOpacity style={styles.shareOptionButton}>
            <Icon name="twitter" size={20} color="#fff" />
            <Text style={styles.shareOptionText}>Post to X (Twitter)</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.shareOptionButton}>
            <Icon name="copy" size={20} color="#fff" />
            <Text style={styles.shareOptionText}>Copy Link</Text>
          </TouchableOpacity>
        </View>
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
    padding: 16,
    gap: 16,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(198, 176, 108, 0.1)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
  shareCardContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  shareCard: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    position: 'relative',
  },
  collectibleTag: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(198, 176, 108, 0.7)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  collectibleTagText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  tokenContainer: {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 16,
  },
  tokenSymbol: {
    color: COLORS.gold,
    fontSize: 24,
    fontWeight: '700',
  },
  tokenName: {
    color: 'black',
    fontSize: 28,
    fontWeight: '700',
  },
  tokenSymbolText: {
    color: COLORS.gold,
    fontSize: 20,
    marginBottom: 20,
  },
  tokenGain: {
    color: '#4CAF50',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 30,
  },
  mintedText: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 14,
  },
  walletText: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: 14,
  },
  customizeSection: {
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 16,
    padding: 16,
  },
  shareSection: {
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 16,
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  customizeButton: {
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  customizeButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
  },
  toggleTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  toggleSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  saveButton: {
    backgroundColor: COLORS.gold,
    marginBottom: 12,
  },
  shareOptionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  shareOptionText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default FlexShareScreen;