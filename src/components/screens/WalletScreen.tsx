import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavHeader from '../ui/NavHeader';
import Icons from '../Icons/icons';

const WalletScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavHeader 
        title="My Wallet" 
        onBack={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.walletCard}>
          <View style={styles.walletHeader}>
            <View style={styles.walletIconContainer}>
              <Icons.Wallet />
            </View>
            
            <View style={styles.walletInfo}>
              <Text style={styles.walletTitle}>Wallet Details</Text>
            </View>
            
            <TouchableOpacity style={styles.copyButton}>
              <Icons.Copy />
            </TouchableOpacity>
          </View>
          
          <View style={styles.walletDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Address</Text>
              <Text style={styles.detailValue}>Fx195p...if6</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Balance</Text>
              <Text style={styles.balanceValue}>
                4.0689 <Text style={styles.tokenText}>SOL</Text>
              </Text>
            </View>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>My Collectibles</Text>
        
        <View style={styles.collectiblesList}>
          {[
            { name: 'Elon Musk', symbol: '$ELON', price: '$42.69', change: '+5.32%', trending: 'up' },
            { name: 'Donald Trump', symbol: '$RUMP', price: '$36.41', change: '-2.15%', trending: 'down' },
            { name: 'Erling Haaland', symbol: '$RLING', price: '$89.75', change: '+12.87%', trending: 'up' },
            { name: 'LeBron James', symbol: '$AMES', price: '$42.69', change: '+3.43%', trending: 'up' },
            { name: 'Vladimir Putin', symbol: '$UTIN', price: '$67.22', change: '-1.75%', trending: 'down' }
          ].map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.collectibleItem}
              onPress={() => navigation.navigate('CollectibleDetail')}
            >
              <View style={styles.collectibleIcon}>
                {item.trending === 'up' ? <Icons.Volume /> : <Icons.Volume />}
              </View>
              
              <View style={styles.collectibleInfo}>
                <Text style={styles.collectibleName}>{item.name}</Text>
                <Text style={styles.collectibleSymbol}>{item.symbol}</Text>
              </View>
              
              <View style={styles.collectiblePrice}>
                <Text style={styles.priceValue}>{item.price}</Text>
                <Text style={[
                  styles.priceChange, 
                  item.trending === 'up' ? styles.priceUp : styles.priceDown
                ]}>
                  {item.trending === 'up' ? '↗' : '↘'} {item.change}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  walletCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  walletInfo: {
    flex: 1,
  },
  walletTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  copyButton: {
    padding: 8,
  },
  walletDetails: {
    gap: 16,
  },
  detailRow: {
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#C6B06C',
    fontWeight: '500',
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  tokenText: {
    color: '#C6B06C',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  collectiblesList: {
    gap: 12,
  },
  collectibleItem: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  collectibleSymbol: {
    fontSize: 14,
    color: '#999999',
  },
  collectiblePrice: {
    alignItems: 'flex-end',
  },
  priceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  priceChange: {
    fontSize: 14,
  },
  priceUp: {
    color: '#4CAF50',
  },
  priceDown: {
    color: '#F44336',
  },
});

export default WalletScreen;
