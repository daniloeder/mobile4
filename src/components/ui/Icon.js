import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Map our names to various icon libraries
const iconMap = {
  // Navigation
  'home': { library: 'Ionicons', name: 'home' },
  'search': { library: 'Ionicons', name: 'search' },
  'settings': { library: 'Ionicons', name: 'settings' },
  'wallet': { library: 'Ionicons', name: 'wallet' },
  'arrow-back': { library: 'Ionicons', name: 'arrow-back' },
  'chevron-back': { library: 'Ionicons', name: 'chevron-back' },
  'chevron-right': { library: 'Feather', name: 'chevron-right' },
  'chevron-down': { library: 'Feather', name: 'chevron-down' },
  'arrow-down': { library: 'Feather', name: 'arrow-down' },
  'external-link': { library: 'Feather', name: 'external-link' },
  'menu': { library: 'Feather', name: 'menu' },
  
  // Actions
  'plus-circle': { library: 'Feather', name: 'plus-circle' },
  'copy': { library: 'Feather', name: 'copy' },
  'share': { library: 'Feather', name: 'share' },
  'twitter': { library: 'Feather', name: 'twitter' },
  'download': { library: 'Feather', name: 'download' },
  'check': { library: 'Feather', name: 'check' },
  'import': { library: 'Feather', name: 'download' },
  'link': { library: 'Feather', name: 'link' },
  
  // UI Elements
  'star': { library: 'Feather', name: 'star' },
  'trending-up': { library: 'Feather', name: 'trending-up' },
  'trending-down': { library: 'Feather', name: 'trending-down' },
  'clock': { library: 'Feather', name: 'clock' },
  'image': { library: 'Feather', name: 'image' },
  'bell': { library: 'Feather', name: 'bell' },
  'help-circle': { library: 'Feather', name: 'help-circle' },
  'globe': { library: 'Feather', name: 'globe' },
  'user': { library: 'Feather', name: 'user' },
  'sparkles': { library: 'MaterialCommunityIcons', name: 'sparkles' },
  'palette': { library: 'MaterialCommunityIcons', name: 'palette' },
};

const Icon = ({ name, size, color, style }) => {
  const iconObj = iconMap[name] || { library: 'Feather', name: 'help-circle' };
  
  let IconComponent;
  
  switch (iconObj.library) {
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    default:
      IconComponent = Feather;
  }
  
  return (
    <View style={style}>
      <IconComponent name={iconObj.name} size={size} color={color} />
    </View>
  );
};

export default Icon;