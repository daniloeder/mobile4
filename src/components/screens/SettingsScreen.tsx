
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import InputField from '../ui/InputField';
import Icon from '../ui/Icon';
import { COLORS } from '../../styles/theme';

const SettingsScreen = () => {
  const [username, setUsername] = useState('StreetX User');
  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.goBack();
  };
  
  return (
    <View style={styles.container}>
      <NavHeader title="Settings" onBack={handleBack} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.settingCard}>
          <View style={[styles.iconContainer, styles.iconGold]}>
            <Icon name="download" color="#222" size={24} />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Wallet backup / Export</Text>
          </View>
          <Icon name="chevron-right" color="white" size={20} />
        </TouchableOpacity>
        
        <View style={styles.settingCard}>
          <View style={[styles.iconContainer, styles.iconPurple]}>
            <Icon name="user" color="white" size={24} />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Change Username</Text>
            <InputField
              value={username}
              onChangeText={setUsername}
              style={styles.usernameInput}
            />
            <CustomButton
              title="Save Username"
              onPress={() => {}}
              style={styles.saveButton}
            />
          </View>
        </View>
        
        <TouchableOpacity style={styles.settingCard}>
          <View style={[styles.iconContainer, styles.iconBlue]}>
            <Icon name="globe" color="white" size={24} />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Language</Text>
          </View>
          <Icon name="chevron-right" color="white" size={20} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingCard}>
          <View style={[styles.iconContainer, styles.iconRed]}>
            <Icon name="bell" color="white" size={24} />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Notifications</Text>
          </View>
          <Icon name="chevron-right" color="white" size={20} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingCard}>
          <View style={[styles.iconContainer, styles.iconGreen]}>
            <Icon name="help-circle" color="white" size={24} />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Support / Help</Text>
          </View>
          <Icon name="external-link" color={COLORS.gold} size={20} />
        </TouchableOpacity>
        
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>StreetX v1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 16,
  },
  settingCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconGold: {
    backgroundColor: COLORS.gold,
  },
  iconPurple: {
    backgroundColor: '#9C27B0',
  },
  iconBlue: {
    backgroundColor: '#2196F3',
  },
  iconRed: {
    backgroundColor: '#F44336',
  },
  iconGreen: {
    backgroundColor: '#4CAF50',
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  usernameInput: {
    marginTop: 12,
    marginBottom: 12,
  },
  saveButton: {
    marginTop: 8,
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  versionText: {
    color: COLORS.gold,
    fontSize: 14,
  },
});

export default SettingsScreen;
