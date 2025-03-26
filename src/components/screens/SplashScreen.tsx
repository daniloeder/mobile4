import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../ui/CustomButton';
import { COLORS } from '../../styles/theme';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('WalletSetup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image 
          //source={require('../../assets/Logo.gif')}
          source={require('../../../assets/collectibles/icon.png')}
          style={styles.logo} 
        />
        
        <Text style={styles.title}>StreetX</Text>
        <Text style={styles.subtitle}>The Culture Exchange</Text>
      </View>
      
      <CustomButton 
        title="Connect Wallet" 
        onPress={handleGetStarted} 
        style={styles.connectButton}
        textStyle={styles.connectButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 40,
  },
  title: {
    color: COLORS.gold,
    fontSize: 60,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.gold,
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 120,
  },
  connectButton: {
    width: '100%',
    backgroundColor: COLORS.gold,
    marginBottom: 32,
    height: 60,
  },
  connectButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SplashScreen;
