
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import Icon from '../ui/Icon';
import { COLORS } from '../../styles/theme';

const BuyTokenScreen = () => {
  const [amount, setAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('0.000000');
  
  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.goBack();
  };
  
  useEffect(() => {
    if (amount) {
      const parsed = parseFloat(amount);
      if (!isNaN(parsed)) {
        setReceiveAmount((parsed / 10).toFixed(7));
      } else {
        setReceiveAmount('0.000000');
      }
    } else {
      setReceiveAmount('0.000000');
    }
  }, [amount]);
  
  return (
    <View style={styles.container}>
      <NavHeader title="Buy SMPL" onBack={handleBack} />
      
      <View style={styles.content}>
        <View style={styles.inputCard}>
          <View style={styles.inputHeader}>
            <Text style={styles.inputLabel}>Enter SOL Amount</Text>
            <Text style={styles.switchText}>Switch to SMPL</Text>
          </View>
          
          <View style={styles.inputWrapper}>
            <Text style={styles.inputPrefix}>$</Text>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
              placeholder="0.00"
              placeholderTextColor="#777"
              keyboardType="numeric"
            />
          </View>
          
          <View style={styles.arrowContainer}>
            <View style={styles.arrowCircle}>
              <Icon name="arrow-down" size={24} color="white" />
            </View>
          </View>
          
          <View style={styles.receiveContainer}>
            <Text style={styles.receiveLabel}>You will receive</Text>
            <View style={styles.receiveRow}>
              <Text style={styles.receiveToken}>$SMPL</Text>
              <Text style={styles.receiveAmount}>
                {receiveAmount} <Text style={styles.receiveSymbol}>SMPL</Text>
              </Text>
            </View>
          </View>
        </View>
        
        <View style={styles.detailsCard}>
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
            title="Buy Now"
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
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  inputCard: {
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 16,
    padding: 24,
  },
  inputHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  inputLabel: {
    color: '#ccc',
    fontSize: 18,
  },
  switchText: {
    color: COLORS.gold,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    borderRadius: 12,
    marginBottom: 32,
  },
  inputPrefix: {
    color: '#999',
    fontSize: 18,
    paddingLeft: 16,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  arrowContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  arrowCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiveContainer: {
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 16,
  },
  receiveLabel: {
    color: 'white',
    marginBottom: 8,
  },
  receiveRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  receiveToken: {
    color: 'white',
  },
  receiveAmount: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  receiveSymbol: {
    color: '#999',
    fontWeight: 'normal',
  },
  detailsCard: {
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 16,
    padding: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    color: '#999',
  },
  detailValue: {
    color: 'white',
  },
  buttonContainer: {
    marginTop: 'auto',
  },
  buyButton: {
    paddingVertical: 16,
  },
});

export default BuyTokenScreen;
