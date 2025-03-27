import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { COLORS, BORDER_RADIUS } from '../../styles/theme';
import Icon from './Icon';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  primary?: boolean;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  primary = true,
  icon,
  loading = false,
  disabled = false,
  style,
  textStyle
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary ? styles.primaryButton : styles.secondaryButton,
        disabled && styles.disabledButton,
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={primary ? 'black' : COLORS.gold} />
      ) : (
        <>
          <Text style={[
            styles.buttonText,
            primary ? styles.primaryText : styles.secondaryText,
            textStyle
          ]}>
            {title}
          </Text>
          {icon && <Icon name={icon} size={18} color={primary ? 'black' : COLORS.gold} style={styles.icon} />}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: BORDER_RADIUS.md,
    minHeight: 52,
  },
  primaryButton: {
    backgroundColor: COLORS.gold,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
  },
  primaryText: {
    color: 'black',
  },
  secondaryText: {
    color: COLORS.gold,
  },
  icon: {
    marginLeft: 8,
  },
});

export default CustomButton;