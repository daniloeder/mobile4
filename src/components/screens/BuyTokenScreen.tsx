import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import { COLORS } from '../../styles/theme';
import Icon from '../ui/Icon';

const BuyTokenScreen = () => {
  const [amount, setAmount] = useState('112');
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const calculateReceiveAmount = () => {
    const inputAmount = parseFloat(amount) || 0;
    return (inputAmount / 10).toFixed(7);
  };

  return (
    <View style={styles.container}>
      <NavHeader title="Buy SMPL" onBack={handleBack} />
      
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <View style={styles.inputHeader}>
            <Text style={styles.inputLabel}>Enter SOL Amount</Text>
            <Text style={styles.switchCurrency}>Switch to SMPL</Text>
          </View>
          
          <View style={styles.inputWrapper}>
            <Text style={styles.currencySymbol}>$</Text>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              placeholder="0.00"
              placeholderTextColor="#aaa"
            />
          </View>
          
          <View style={styles.arrowContainer}>
            <Icon name="arrow-down" size={24} color="#777" />
          </View>
          
          <View style={styles.receiveContainer}>
            <Text style={styles.receiveLabel}>You will receive</Text>
            <View style={styles.receiveValueContainer}>
              <Text style={styles.receiveSymbol}>$SMPL</Text>
              <Text style={styles.receiveValue}>{calculateReceiveAmount()} <Text style={styles.smplText}>SMPL</Text></Text>
            </View>
          </View>
        </View>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Slippage Tolerance</Text>
            <Text style={styles.detailValue}>1%</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Maximum SOL Spent</Text>
            <Text style={styles.detailValue}>0.00 SOL</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Current Price</Text>
            <Text style={styles.detailValue}>$10.00</Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Buy SMPL"
            onPress={() => {}}
            style={styles.buyButton}
          />
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
  },
  inputContainer: {
    backgroundColor: '#777',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  inputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputLabel: {
    color: '#ddd',
    fontSize: 16,
  },
  switchCurrency: {
    color: COLORS.gold,
    fontSize: 16,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 50,
  },
  currencySymbol: {
    color: 'white',
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    height: 50,
  },
  arrowContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  receiveContainer: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 16,
  },
  receiveLabel: {
    color: '#999',
    marginBottom: 8,
  },
  receiveValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  receiveSymbol: {
    color: 'white',
    fontSize: 16,
  },
  receiveValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  smplText: {
    color: '#999',
  },
  detailsContainer: {
    backgroundColor: '#777',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    color: '#ddd',
  },
  detailValue: {
    color: 'white',
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingBottom: 16,
  },
  buyButton: {
    backgroundColor: COLORS.gold,
    height: 56,
  },
});

export default BuyTokenScreen;