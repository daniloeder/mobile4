import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from '../Icons/icons';

interface NavHeaderProps {
  title: string;
  onBack?: () => void;
}

const NavHeader: React.FC<NavHeaderProps> = ({ title, onBack }) => {
  return (
    <View style={styles.header}>
      {onBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Icons.ChevronLeft />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  rightPlaceholder: {
    width: 40,
  },
});

export default NavHeader;
