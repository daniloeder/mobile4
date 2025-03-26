import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import { COLORS } from '../../styles/theme';
import Icon from '../ui/Icon';

const SuccessScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleViewCollectible = () => {
    navigation.navigate('CollectibleDetail');
  };

  const handleShareToSocial = () => {
    // Implement share functionality
  };

  return (
    <View style={styles.container}>
      <NavHeader title="Success" onBack={handleBack} />
      
      <View style={styles.content}>
        <View style={styles.checkIconContainer}>
          <Icon name="check" size={64} color="#f0e6b2" />
        </View>
        
        <Text style={styles.titleText}>
          Your Collectible has Launched!
        </Text>
        
        <Text style={styles.subtitleText}>
          Ashiqur ($ASHIQ) is now live on the StreetX marketplace
        </Text>
        
        <View style={styles.buttonContainer}>
          <CustomButton 
            title="View Collectible"
            onPress={handleViewCollectible}
            style={styles.viewButton}
          />
          
          <CustomButton 
            title="Share to Social"
            onPress={handleShareToSocial}
            icon="share"
            style={styles.shareButton}
            textStyle={styles.shareButtonText}
          />
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  checkIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#453C16',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  titleText: {
    color: COLORS.gold,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitleText: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 64,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  viewButton: {
    backgroundColor: COLORS.gold,
    height: 56,
  },
  shareButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.gold,
    height: 56,
  },
  shareButtonText: {
    color: COLORS.gold,
  },
});

export default SuccessScreen;