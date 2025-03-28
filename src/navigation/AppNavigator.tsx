
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Icon from '../components/ui/Icon';
import { COLORS } from '../styles/theme';

// Import screens
import SplashScreen from '../components/screens/SplashScreen';
import WalletSetup from '../components/screens/WalletSetup';
import HomeScreen from '../components/screens/HomeScreen';
import WalletScreen from '../components/screens/WalletScreen';
import SettingsScreen from '../components/screens/SettingsScreen';
import TokenExplorerScreen from '../components/screens/TokenExplorerScreen';
import CollectibleDetailScreen from '../components/screens/CollectibleDetailScreen';
import LaunchCollectibleScreen from '../components/screens/LaunchCollectibleScreen';
import FlexShareScreen from '../components/screens/FlexShareScreen';
import BuyTokenScreen from '../components/screens/BuyTokenScreen';
import SuccessScreen from '../components/screens/SuccessScreen';
import AlertsScreen from '../components/screens/AlertsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = ({ name, color }) => {
  return <Icon name={name} size={24} color={color} />;
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.gold,
        tabBarInactiveTintColor: '#777',
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tab.Screen 
        name="Explorer" 
        component={TokenExplorerScreen} 
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tab.Screen 
        name="Launch" 
        component={LaunchCollectibleScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="launch" color={color} />,
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="wallet" color={color} />,
        }}
      />
      <Tab.Screen 
        name="Alerts" 
        component={AlertsScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        id={undefined}
        initialRouteName="Splash"
        screenOptions={{ 
          headerShown: false,
          cardStyle: { backgroundColor: '#000' }
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="WalletSetup" component={WalletSetup} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="CollectibleDetail" component={CollectibleDetailScreen} />
        <Stack.Screen name="FlexShare" component={FlexShareScreen} />
        <Stack.Screen name="BuyToken" component={BuyTokenScreen} />
        <Stack.Screen name="LaunchCollectible" component={LaunchCollectibleScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#111',
    borderTopWidth: 0,
    elevation: 0,
    height: 60,
    paddingBottom: 5,
  },
});

export default AppNavigator;
