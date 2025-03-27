
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import Icon from '../ui/Icon';
import { COLORS, BORDER_RADIUS, FONT_SIZE } from '../../styles/theme';

const FlexShareScreen = () => {
  const navigation = useNavigation();
  const [showWalletAddress, setShowWalletAddress] = useState(true);
  const [percentage, setPercentage] = useState('351.64');
  const [mintDate, setMintDate] = useState('June 24, 2022');
  
  const handleBack = () => {
    navigation.goBack();
  };

  const generateRandomPercentage = () => {
    const randomPercentage = (Math.random() * 500).toFixed(2);
    setPercentage(randomPercentage);
  };
  
  return (
    <View style={styles.container}>
      <NavHeader title="Flex Share" onBack={handleBack} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.infoCard}>
          <Icon name="sparkles" size={20} color={COLORS.gold} />
          <Text style={styles.infoText}>
            Create a shareable image to show off your gains on this token
          </Text>
        </View>
        
        <View style={styles.cardContainer}>
          {/* Preview Card */}
          <View style={styles.previewCard}>
            {/* Coins decoration - top left */}
            <View style={[styles.coinDecoration, styles.topLeft]}>
              <Image 
                source={require('../../../assets/logo.jpg')}
                style={styles.coinImage}
              />
            </View>
            
            {/* Coins decoration - top right */}
            <View style={[styles.coinDecoration, styles.topRight]}>
              <Image 
                source={require('../../../assets/logo.jpg')}
                style={styles.coinImage}
              />
            </View>
            
            {/* Header Text */}
            <View style={styles.headerText}>
              <Text style={styles.headerLine}>Just minted the Lebron</Text>
              <Text style={styles.headerLine}>James Collectible on StreetX!</Text>
              <Text style={styles.subheaderLine}>Early minters win big—buy a Street</Text>
              <Text style={styles.subheaderLine}>Collectible today or launch your own ICO!</Text>
            </View>
            
            {/* Profile Image */}
            <View style={styles.profileContainer}>
              <Image 
                source={require('../../../assets/profile.jpg')}
                style={styles.profileImage}
              />
            </View>
            
            {/* Name */}
            <Text style={styles.userName}>JASON</Text>
            
            {/* Percentage */}
            <Text style={styles.percentageValue}>+{percentage}%</Text>
            
            {/* Date */}
            <View style={styles.dateContainer}>
              <Text style={styles.sinceText}>Since</Text>
              <Text style={styles.dateText}>{mintDate}</Text>
            </View>
            
            {/* Collect Now Button */}
            <TouchableOpacity style={styles.collectButton}>
              <Text style={styles.collectButtonText}>Collect Now</Text>
            </TouchableOpacity>
            
            {/* Coins decoration - bottom */}
            <View style={[styles.coinDecoration, styles.bottomLeft]}>
              <Image 
                source={require('../../../assets/logo.jpg')}
                style={styles.coinImage}
              />
            </View>
            <View style={[styles.coinDecoration, styles.bottomRight]}>
              <Image 
                source={require('../../../assets/logo.jpg')}
                style={styles.coinImage}
              />
            </View>
            
            {showWalletAddress && (
              <Text style={styles.walletAddress}>Fx8d37...29qP</Text>
            )}
          </View>
        </View>
        
        <View style={styles.customizeSection}>
          <View style={styles.sectionHeader}>
            <Icon name="sliders" size={20} color={COLORS.gold} />
            <Text style={styles.sectionTitle}>Customize Your Flex</Text>
          </View>
          
          <View style={styles.customizeButtonsRow}>
            <TouchableOpacity style={styles.customizeButton}>
              <Text style={styles.customizeButtonText}>Change Background</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.customizeButton}
              onPress={generateRandomPercentage}
            >
              <Text style={styles.customizeButtonText}>Random Gain %</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.switchContainer}>
            <View>
              <Text style={styles.switchTitle}>Show Wallet Address</Text>
              <Text style={styles.switchSubtitle}>Display your wallet as watermark</Text>
            </View>
            <Switch
              value={showWalletAddress}
              onValueChange={setShowWalletAddress}
              trackColor={{ false: '#333', true: COLORS.gold }}
              thumbColor="#FFF"
            />
          </View>
        </View>
        
        <View style={styles.shareSection}>
          <View style={styles.sectionHeader}>
            <Icon name="share-2" size={20} color={COLORS.gold} />
            <Text style={styles.sectionTitle}>Share Your Flex</Text>
          </View>
          
          <CustomButton
            title="Save Image"
            icon="download"
            onPress={() => {}}
            style={styles.saveButton}
          />
          
          <TouchableOpacity style={styles.shareButton}>
            <Icon name="twitter" size={20} color="white" />
            <Text style={styles.shareButtonText}>Post to X (Twitter)</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.shareButton}>
            <Icon name="copy" size={20} color="white" />
            <Text style={styles.shareButtonText}>Copy Link</Text>
          </TouchableOpacity>
        </View>
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
    gap: 16,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(198, 176, 108, 0.1)',
    borderRadius: BORDER_RADIUS.xl,
    padding: 16,
  },
  infoText: {
    color: 'white',
    marginLeft: 12,
    flex: 1,
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#17171F',
    borderRadius: BORDER_RADIUS.xl,
    padding: 16,
  },
  previewCard: {
    width: 280,
    height: 400,
    backgroundColor: '#1E1E24',
    borderRadius: 12,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
  },
  coinDecoration: {
    position: 'absolute',
    width: 32,
    height: 32,
  },
  topLeft: {
    top: 8,
    left: 8,
  },
  topRight: {
    top: 8,
    right: 8,
  },
  bottomLeft: {
    bottom: 8,
    left: 8,
  },
  bottomRight: {
    bottom: 8,
    right: 8,
  },
  coinImage: {
    width: 32,
    height: 32,
    opacity: 0.4,
  },
  headerText: {
    alignItems: 'center',
    marginVertical: 8,
  },
  headerLine: {
    color: COLORS.gold,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subheaderLine: {
    color: '#888',
    fontSize: 12,
    marginTop: 2,
  },
  profileContainer: {
    marginTop: 16,
    marginBottom: 8,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLORS.gold,
    overflow: 'hidden',
  },
  profileImage: {
    width: 80,
    height: 80,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  percentageValue: {
    color: '#4CAF50',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 16,
  },
  dateContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  sinceText: {
    color: '#888',
    fontSize: 14,
  },
  dateText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  collectButton: {
    marginTop: 16,
    backgroundColor: COLORS.gold,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  collectButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  walletAddress: {
    position: 'absolute',
    bottom: 4,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#555',
    fontSize: 10,
  },
  customizeSection: {
    backgroundColor: '#17171F',
    borderRadius: BORDER_RADIUS.xl,
    padding: 16,
  },
  shareSection: {
    backgroundColor: '#17171F',
    borderRadius: BORDER_RADIUS.xl,
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
  customizeButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  customizeButton: {
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  customizeButtonText: {
    color: 'white',
    fontSize: 14,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 12,
  },
  switchTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  switchSubtitle: {
    color: '#999',
    fontSize: 12,
  },
  saveButton: {
    marginBottom: 12,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  shareButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default FlexShareScreen;
