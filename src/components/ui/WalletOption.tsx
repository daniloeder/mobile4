import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface WalletOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onPress: () => void;
}

const WalletOption: React.FC<WalletOptionProps> = ({ 
  icon, 
  title, 
  description, 
  onPress 
}) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
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
    backgroundColor: '#17171F',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
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
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#999999',
  },
});

export default WalletOption;
