import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { ModalProvider } from './src/contexts/ModalContext';

// Screen imports
import WalletSetup from './src/components/screens/WalletSetup';
import SplashScreen from './src/components/screens/SplashScreen';
import WalletScreen from './src/components/screens/WalletScreen';
import HomeScreen from './src/components/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ModalProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: 'black' }
            }}
          >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="WalletSetup" component={WalletSetup} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Wallet" component={WalletScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ModalProvider>
    </SafeAreaProvider>
  );
}
