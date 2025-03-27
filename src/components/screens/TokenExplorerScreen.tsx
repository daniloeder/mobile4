import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '../ui/Icon';
import CustomButton from '../ui/CustomButton';
import { COLORS, FONT_SIZE } from '../../styles/theme';

const TokenExplorerScreen = () => {
  const navigation = useNavigation();
  
  const handleMint = () => {
    navigation.navigate('LaunchCollectible' as never);
  };
  
  const tokenData = [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$62,134.21',
      change: '-1.32%',
      image: require('../../../assets/icons/bitcoin.png'),
      changeType: 'negative'
    },
    {
      id: '2',
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$3,450.78',
      change: '+2.54%',
      image: require('../../../assets/icons/ethereum.png'),
      changeType: 'positive'
    },
    {
      id: '3',
      name: 'Solana',
      symbol: 'SOL',
      price: '$147.52',
      change: '+4.12%',
      image: require('../../../assets/icons/solana.png'),
      changeType: 'positive'
    },
    {
      id: '4',
      name: 'Uniswap',
      symbol: 'UNI',
      price: '$7.82',
      change: '-0.67%',
      image: require('../../../assets/icons/uniswap.png'),
      changeType: 'negative'
    },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity>
            <Icon name="menu" size={24} color="white" />
          </TouchableOpacity>
          
          <Image 
            source={require('../../../assets/logo.jpg')}
            style={styles.logoSmall}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={handleMint} style={styles.mintButton}>
            <Text style={styles.mintButtonText}>Mint Your First ICO</Text>
            </TouchableOpacity>
        </View>
        
        <Text style={styles.headerTitle}>Token Explorer</Text>
        <Text style={styles.headerSubtitle}>
          Browse and discover top tokens across various categories
        </Text>
        
        <View style={styles.filterContainer}>
          <View style={styles.filterItem}>
            <Text style={styles.filterText}>All Tokens</Text>
            <Icon name="chevron-down" size={16} color="white" />
          </View>
          
          <View style={styles.filterItem}>
            <Text style={styles.filterText}>↕ Market Cap</Text>
            <Icon name="chevron-down" size={16} color="white" />
          </View>
        </View>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Token</Text>
          <Text style={styles.tableHeaderText}>Price</Text>
        </View>
        
        {tokenData.map(token => (
          <View key={token.id} style={styles.tokenItem}>
            <View style={styles.tokenLeft}>
              <Image 
                source={token.image}
                style={styles.tokenImage}
              />
              <View style={styles.tokenInfo}>
                <Text style={styles.tokenName}>{token.name}</Text>
                <Text style={styles.tokenSymbol}>{token.symbol}</Text>
              </View>
            </View>
            
            <View style={styles.tokenRight}>
              <Text style={styles.tokenPrice}>{token.price}</Text>
              <Text 
                style={[
                  styles.tokenChange, 
                  token.changeType === 'positive' ? styles.positiveChange : styles.negativeChange
                ]}
              >
                {token.change}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  logoSmall: {
    width: 32,
    height: 32,
    marginRight: 'auto',
    marginLeft: 16,
  },
  mintButton: {
    height: 36,
    paddingHorizontal: 12,
    backgroundColor: 'black',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  mintButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#999',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 0.48,
    justifyContent: 'space-between',
  },
  filterText: {
    color: 'white',
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tableHeaderText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  tokenItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tokenLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokenImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  tokenInfo: {
    justifyContent: 'center',
  },
  tokenName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  tokenSymbol: {
    color: '#999',
    fontSize: 14,
  },
  tokenRight: {
    alignItems: 'flex-end',
  },
  tokenPrice: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  tokenChange: {
    fontSize: 14,
  },
  positiveChange: {
    color: '#4CAF50',
  },
  negativeChange: {
    color: '#EA384C',
  },
});

export default TokenExplorerScreen;
