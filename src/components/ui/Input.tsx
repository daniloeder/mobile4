import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, BORDER_RADIUS } from '../../styles/theme';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  style?: any;
}

const Input = ({
  value,
  onChangeText,
  placeholder,
  label,
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  style,
}: InputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={[
          styles.input,
          multiline && { height: 100, textAlignVertical: 'top' },
          style,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: COLORS.white,
    fontSize: FONT_SIZE.sm,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.darkInput,
    borderRadius: BORDER_RADIUS.md,
    color: COLORS.white,
    padding: 12,
    fontSize: FONT_SIZE.md,
    borderWidth: 1,
    borderColor: COLORS.darkBorder,
  },
});

export default Input;