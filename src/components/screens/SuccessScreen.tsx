
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import Icon from '../ui/Icon';
import { COLORS } from '../../styles/theme';

const SuccessScreen = () => {
  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.goBack();
  };
  
  const handleContinue = () => {
    navigation.navigate('CollectibleDetail' as never);
  };
  
  return (
    <View style={styles.container}>
      <NavHeader title="Success" onBack={handleBack} />
      
      <View style={styles.content}>
        <View style={styles.successIcon}>
          <Icon name="check" size={50} color="#f0e6b2" />
        </View>
        
        <Text style={styles.title}>
          Your Collectible has Launched!
        </Text>
        
        <Text style={styles.subtitle}>
          Ashiqur ($ASHIQ) is now live on the StreetX marketplace
        </Text>
        
        <View style={styles.buttonContainer}>
          <CustomButton
            title="View Collectible"
            onPress={handleContinue}
            style={styles.viewButton}
          />
          
          <CustomButton
            title="Share to Social"
            icon="share-2"
            onPress={() => {}}
            primary={false}
            style={styles.shareButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  successIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#453C16',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  title: {
    color: COLORS.gold,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: '#999',
    textAlign: 'center',
    marginBottom: 60,
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  viewButton: {
    paddingVertical: 16,
  },
  shareButton: {
    paddingVertical: 16,
  },
});

export default SuccessScreen;
