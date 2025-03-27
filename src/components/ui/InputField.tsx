import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, BORDER_RADIUS } from '../../styles/theme';

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  style?: any;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  label,
  secureTextEntry = false,
  keyboardType = 'default',
  prefix,
  suffix,
  style,
  disabled = false,
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}
      <View style={[
        styles.inputContainer,
        disabled && styles.disabledInput
      ]}>
        {prefix && (
          <View style={styles.prefixContainer}>
            {prefix}
          </View>
        )}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          editable={!disabled}
          selectTextOnFocus={!disabled}
        />
        {suffix && (
          <View style={styles.suffixContainer}>
            {suffix}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: '#999',
    marginBottom: 8,
    fontSize: FONT_SIZE.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.darkInput,
    borderWidth: 1,
    borderColor: COLORS.darkBorder,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
  },
  disabledInput: {
    opacity: 0.5,
  },
  input: {
    flex: 1,
    color: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: FONT_SIZE.md,
  },
  prefixContainer: {
    paddingLeft: 12,
  },
  suffixContainer: {
    paddingRight: 12,
  },
});

export default InputField;