import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const NavHeader = ({ title, onBack }) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Icon name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {onBack && <View style={styles.placeholder} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
});

export default NavHeader;