
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../ui/CustomButton';
import { COLORS, FONT_SIZE } from '../../styles/theme';

const SplashScreen = () => {
  const navigation = useNavigation();
  
  const handleGetStarted = () => {
    navigation.navigate('WalletSetup' as never);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../../assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.title}>StreetX</Text>
        <Text style={styles.subtitle}>The Culture Exchange</Text>
      </View>
      
      <CustomButton
        title="Connect Wallet"
        onPress={handleGetStarted}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 24,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 160,
    height: 160,
    marginBottom: 40,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: COLORS.gold,
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.gold,
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 120,
  },
  button: {
    paddingVertical: 16,
    marginBottom: 32,
  },
  buttonText: {
    fontSize: FONT_SIZE.lg,
  },
});

export default SplashScreen;
