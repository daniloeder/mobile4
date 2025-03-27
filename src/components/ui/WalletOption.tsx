import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { COLORS, BORDER_RADIUS, FONT_SIZE } from '../../styles/theme';

interface WalletOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onPress: () => void;
  active?: boolean;
}

const WalletOption: React.FC<WalletOptionProps> = ({ 
  icon, 
  title, 
  description, 
  onPress,
  active = false
}) => {
  return (
    <TouchableOpacity 
      style={[styles.option, active && styles.activeOption]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.darkBackground,
    borderRadius: BORDER_RADIUS.xl,
    padding: 16,
    marginBottom: 16,
  },
  activeOption: {
    borderColor: COLORS.gold,
    borderWidth: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(198, 176, 108, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: FONT_SIZE.md,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: 4,
  },
  description: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray,
  },
});

export default WalletOption;