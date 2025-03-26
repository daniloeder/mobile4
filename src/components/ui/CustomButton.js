import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from './Icon';
import { COLORS } from '../../styles/theme';

const CustomButton = ({ 
  title, 
  onPress, 
  style, 
  textStyle, 
  icon, 
  iconPosition = 'left',
  loading = false,
  disabled = false
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        style,
        disabled && styles.disabledButton
      ]} 
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={textStyle?.color || '#000'} />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <Icon name={icon} size={20} color={textStyle?.color || '#000'} style={styles.leftIcon} />
          )}
          <Text style={[styles.text, textStyle]}>{title}</Text>
          {icon && iconPosition === 'right' && (
            <Icon name={icon} size={20} color={textStyle?.color || '#000'} style={styles.rightIcon} />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.gold,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.6,
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
});

export default CustomButton;