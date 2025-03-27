
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Import screen components
import SplashScreen from '../components/screens/SplashScreen';
import WalletSetup from '../components/screens/WalletSetup';
import HomeScreen from '../components/screens/HomeScreen';
import WalletScreen from '../components/screens/WalletScreen';
import TokenExplorerScreen from '../components/screens/TokenExplorerScreen';
import CollectibleDetailScreen from '../components/screens/CollectibleDetailScreen';
import LaunchCollectibleScreen from '../components/screens/LaunchCollectibleScreen';
import SuccessScreen from '../components/screens/SuccessScreen';
import FlexShareScreen from '../components/screens/FlexShareScreen';
import SettingsScreen from '../components/screens/SettingsScreen';
import BuyTokenScreen from '../components/screens/BuyTokenScreen';
import AlertsScreen from '../components/screens/AlertsScreen';

// Import web navigation polyfills
import '../navigation/web-navigation-polyfills';
import AppNavigator from '../navigation/AppNavigator';

const Index = () => {
  return (
    <div className="bg-black min-h-screen max-w-lg mx-auto relative overflow-hidden">
      {/* Status bar (mock) */}
      <div className="bg-black text-white p-2 flex justify-between items-center">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-6 h-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 18"></path>
              <path d="M8 14L16 14"></path>
              <path d="M10 10L14 10"></path>
              <path d="M12 6L12 6"></path>
            </svg>
          </div>
          <div className="w-4 h-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8.5 12.5A5 5 0 0 1 18.5 12.5"></path>
              <path d="M2 12.5A11 11 0 0 1 22 12.5"></path>
            </svg>
          </div>
          <div className="w-6 h-3 flex items-center">
            <div className="w-5 h-2.5 border border-white rounded-sm relative">
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content area - Use AppNavigator component */}
      <AppNavigator />
    </div>
  );
};

export default Index;
