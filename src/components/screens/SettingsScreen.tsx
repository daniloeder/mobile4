import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import { COLORS } from '../../styles/theme';
import Icon from '../ui/Icon';

const SettingsScreen = () => {
  const [username, setUsername] = useState('StreetX User');
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <NavHeader title="Settings" onBack={handleBack} />
      
      <View style={styles.content}>
        <TouchableOpacity style={styles.settingCard}>
          <View style={[styles.iconContainer, { backgroundColor: COLORS.gold }]}>
            <Icon name="download" size={24} color="#222" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Wallet backup / Export</Text>
          </View>
          <Icon name="chevron-right" size={20} color="white" />
        </TouchableOpacity>
        
        <View style={styles.usernameCard}>
          <View style={styles.settingHeader}>
            <View style={[styles.iconContainer, { backgroundColor: '#9B59B6' }]}>
              <Icon name="user" size={24} color="white" />
            </View>
            <Text style={styles.settingTitle}>Change Username</Text>
          </View>
          
          <TextInput
            style={styles.usernameInput}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#777"
          />
          
          <CustomButton
            title="Save Username"
            onPress={() => {}}
            style={styles.gradientButton}
          />
        </View>
        
        <TouchableOpacity style={styles.settingCard}>
          <View style={[styles.iconContainer, { backgroundColor: '#3498DB' }]}>
            <Icon name="globe" size={24} color="white" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Language</Text>
          </View>
          <Icon name="chevron-down" size={20} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingCard}>
          <View style={[styles.iconContainer, { backgroundColor: '#E74C3C' }]}>
            <Icon name="bell" size={24} color="white" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Notifications</Text>
          </View>
          <Icon name="chevron-down" size={20} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingCard}>
          <View style={[styles.iconContainer, { backgroundColor: '#2ECC71' }]}>
            <Icon name="help-circle" size={24} color="white" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Support / Help</Text>
          </View>
          <Icon name="external-link" size={20} color={COLORS.gold} />
        </TouchableOpacity>
        
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>StreetX v1.0.0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  settingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  usernameCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
  },
  settingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  usernameInput: {
    backgroundColor: '#333',
    borderRadius: 8,
    color: 'white',
    padding: 12,
    marginBottom: 16,
  },
  gradientButton: {
    backgroundColor: '#9B59B6',
  },
  versionContainer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  versionText: {
    color: COLORS.gold,
    fontSize: 14,
  },
});

export default SettingsScreen;