
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import Icon from '../ui/Icon';
import { COLORS, FONT_SIZE } from '../../styles/theme';

const WalletScreen = () => {
  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.goBack();
  };
  
  const handleSelectCollectible = () => {
    navigation.navigate('CollectibleDetail' as never);
  };
  
  return (
    <View style={styles.container}>
      <NavHeader title="My Wallet" onBack={handleBack} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.walletCard}>
          <View style={styles.walletHeader}>
            <View style={styles.walletIconContainer}>
              <Icon name="wallet" size={24} color={COLORS.gold} />
            </View>
            <Text style={styles.walletTitle}>Wallet Details</Text>
            <TouchableOpacity>
              <Icon name="copy" size={24} color={COLORS.gold} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.walletDetails}>
            <View style={styles.walletDetail}>
              <Text style={styles.detailLabel}>Address</Text>
              <Text style={styles.detailValue}>Fx195p...if6</Text>
            </View>
            
            <View style={styles.walletDetail}>
              <Text style={styles.detailLabel}>Balance</Text>
              <Text style={styles.balanceValue}>
                4.0689 <Text style={styles.solText}>SOL</Text>
              </Text>
            </View>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>My Collectibles</Text>
        
        <View style={styles.collectiblesList}>
          <TouchableOpacity 
            style={styles.collectibleItem}
            onPress={handleSelectCollectible}
          >
            <View style={styles.collectibleIcon}>
              <Icon name="trending-up" size={20} color={COLORS.gold} />
            </View>
            <View style={styles.collectibleInfo}>
              <Text style={styles.collectibleName}>Elon Musk</Text>
              <Text style={styles.collectibleSymbol}>$ELON</Text>
            </View>
            <View style={styles.collectiblePrice}>
              <Text style={styles.priceValue}>$42.69</Text>
              <View style={styles.changeContainer}>
                <Icon name="trending-up" size={14} color="#4CAF50" />
                <Text style={styles.changeValue}>5.32%</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          {/* Add more collectible items here */}
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
    gap: 24,
  },
  walletCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 24,
  },
  walletHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  walletIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#453C16',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  walletTitle: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  walletDetails: {
    gap: 16,
  },
  walletDetail: {
    marginBottom: 8,
  },
  detailLabel: {
    color: '#999',
    marginBottom: 4,
  },
  detailValue: {
    color: COLORS.gold,
    fontWeight: '500',
  },
  balanceValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  solText: {
    color: COLORS.gold,
    fontWeight: 'normal',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
  },
  collectiblesList: {
    gap: 12,
  },
  collectibleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
  },
  collectibleIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#453C16',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  collectibleInfo: {
    flex: 1,
  },
  collectibleName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  collectibleSymbol: {
    color: '#999',
  },
  collectiblePrice: {
    alignItems: 'flex-end',
  },
  priceValue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  changeValue: {
    color: '#4CAF50',
    marginLeft: 4,
  },
});

export default WalletScreen;
