import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Mock nav icons for web
const navIcons = {
  home: require('../../../assets/icons/nav_icons/home.png'),
  browse: require('../../../assets/icons/nav_icons/browse.png'),
  launch: require('../../../assets/icons/nav_icons/launch.png'),
  wallet: require('../../../assets/icons/nav_icons/wallet.png'),
  bell: require('../../../assets/icons/nav_icons/bell.png'),
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: any;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#FFF', style }) => {
  // Check if it's a navigation icon
  if (navIcons[name]) {
    return (
      <Image 
        source={navIcons[name]} 
        style={[{ width: size, height: size }, style]}
      />
    );
  }
  
  // For web, we'll use a simple fallback when Feather icons aren't available
  try {
    return <Feather name={name} size={size} color={color} style={style} />;
  } catch (error) {
    // If Feather isn't available, provide a simple fallback
    return (
      <View style={[{ width: size, height: size, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center', borderRadius: size/2 }, style]}>
        <Text style={{ color: color, fontSize: size/2 }}>{name.charAt(0)}</Text>
      </View>
    );
  }
};

export default Icon;