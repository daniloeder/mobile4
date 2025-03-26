import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

interface IconProps {
  style?: any;
}

const IconBase: React.FC<{ style?: any, children: React.ReactNode }> = ({ children, style }) => (
  <View style={[styles.iconContainer, style]}>
    {children}
  </View>
);

// Wallet icon
const Wallet: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <Rect x="14" y="7" width="8" height="10" rx="2" />
      <Circle cx="18" cy="12" r="1" />
    </Svg>
  </IconBase>
);

// Upload icon
const Upload: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <Path d="M17 8l-5-5-5 5" />
      <Path d="M12 3v12" />
    </Svg>
  </IconBase>
);

// Link icon
const Link: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <Path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </Svg>
  </IconBase>
);

// Copy icon
const Copy: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" />
      <Path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" />
    </Svg>
  </IconBase>
);

// ChevronLeft icon
const ChevronLeft: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M15 18l-6-6 6-6" />
    </Svg>
  </IconBase>
);

// MenuDashboard icon
const MenuDashboard: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Rect x="3" y="3" width="7" height="7" />
      <Rect x="14" y="3" width="7" height="7" />
      <Rect x="14" y="14" width="7" height="7" />
      <Rect x="3" y="14" width="7" height="7" />
    </Svg>
  </IconBase>
);

// Liquidity icon
const Liquidity: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 3V21M5 8H19M8 16H16" />
    </Svg>
  </IconBase>
);

// Swap icon
const Swap: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M7 16L3 12M3 12L7 8M3 12H16M17 8L21 12M21 12L17 16M21 12H8" />
    </Svg>
  </IconBase>
);

// Money icon
const Money: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <Path d="M2 17L12 22L22 17" />
      <Path d="M2 12L12 17L22 12" />
    </Svg>
  </IconBase>
);

// Volume icon
const Volume: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M8 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H8M15 16L19 12L15 8M10 12H19" />
    </Svg>
  </IconBase>
);

// VolumeUpGold icon
const VolumeUpGold: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M11 5L6 9H2V15H6L11 19V5Z" />
      <Path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22" />
      <Path d="M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17" />
    </Svg>
  </IconBase>
);

// Gear icon
const Gear: React.FC<IconProps> = ({ style }) => (
  <IconBase style={style}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6B06C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
      <Path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </Svg>
  </IconBase>
);

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default {
  Wallet,
  Upload,
  Link,
  Copy,
  ChevronLeft,
  MenuDashboard,
  Liquidity,
  Swap,
  Money,
  Volume,
  VolumeUpGold,
  Gear,
};
