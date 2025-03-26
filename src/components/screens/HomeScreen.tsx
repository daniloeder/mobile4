import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  TextInput,
  FlatList 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../styles/theme';
import Icon from '../ui/Icon';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleWalletPress = () => {
    navigation.navigate('Wallet');
  };

  const handleCollectiblePress = (id) => {
    navigation.navigate('CollectibleDetail');
  };

  const renderHotCollectible = ({ item }) => (
    <TouchableOpacity 
      style={styles.hotCollectibleCard}
      onPress={() => handleCollectiblePress(item.id)}
    >
      <Image source={item.image} style={styles.hotCollectibleImage} />
      <View style={styles.hotCollectibleInfo}>
        <View>
          <Text style={styles.hotCollectibleName}>{item.name}</Text>
          <Text style={styles.hotCollectibleId}>#{item.id}</Text>
        </View>
        <Text style={styles.hotCollectiblePrice}>{item.price} SOL</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCollectibleItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.collectibleItem}
      onPress={() => handleCollectiblePress(item.id)}
    >
      <Image source={item.image} style={styles.collectibleItemImage} />
      <View style={styles.collectibleItemInfo}>
        <Text style={styles.collectibleItemName}>{item.name}</Text>
        <View style={styles.collectibleItemStats}>
          <Text style={styles.collectibleItemPrice}>{item.price} SOL</Text>
          <Text style={[
            styles.collectibleItemChange,
            item.change > 0 ? styles.positiveChange : styles.negativeChange
          ]}>
            {item.change > 0 ? '+' : ''}{item.change}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const hotCollectibles = [
    { 
      id: '4281', 
      name: 'Degen Ape', 
      price: '12.5', 
      //image: require('../../assets/collectibles/degen-ape.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '182', 
      name: 'CryptoMutt', 
      price: '8.2', 
      //image: require('../../assets/collectibles/crypto-mutt.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '293', 
      name: 'Mad Lads', 
      price: '19.5', 
      //image: require('../../assets/collectibles/mad-lads.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
  ];

  const trendingCollectibles = [
    { 
      id: '1', 
      name: 'Claynosaurz', 
      price: '5.3', 
      change: 12.4, 
      //image: require('../../assets/collectibles/claynosaurz.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '2', 
      name: 'DeGods', 
      price: '30.7', 
      change: 8.7, 
      //image: require('../../assets/collectibles/degods.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '3', 
      name: 'Okay Bears', 
      price: '48.2', 
      change: 5.2, 
      //image: require('../../assets/collectibles/okay-bears.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '4', 
      name: 'Famous Fox', 
      price: '10.5', 
      change: 3.8, 
      //image: require('../../assets/collectibles/famous-fox.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
  ];

  const recentlyMinted = [
    { 
      id: '103', 
      name: 'Pixel Peeps', 
      price: '2.8', 
      time: '5m ago', 
      //image: require('../../assets/collectibles/pixel-peeps.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '2184', 
      name: 'Solana', 
      price: '4.1', 
      time: '12m ago', 
      //image: require('../../assets/collectibles/solana.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '9281', 
      name: 'Neural Nets', 
      price: '1.5', 
      time: '34m ago', 
      //image: require('../../assets/collectibles/neural-nets.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '482', 
      name: 'Pixel Pandas', 
      price: '3.2', 
      time: '1h ago', 
      //image: require('../../assets/collectibles/pixel-pandas.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
  ];

  const topGainers = [
    { 
      id: '1', 
      name: 'Space Runners', 
      price: '14.3', 
      change: 62.8, 
      //image: require('../../assets/collectibles/space-runners.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '2', 
      name: 'Cosmic Creatures', 
      price: '8.7', 
      change: 41.2, 
      //image: require('../../assets/collectibles/cosmic-creatures.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '3', 
      name: 'Meta Monsters', 
      price: '6.9', 
      change: 37.5, 
      //image: require('../../assets/collectibles/meta-monsters.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
    { 
      id: '4', 
      name: 'Digi Dragons', 
      price: '11.2', 
      change: 29.3, 
      //image: require('../../assets/collectibles/digi-dragons.jpg') 
      image: require('../../../assets/collectibles/icon.png')
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image 
            //source={require('../../assets/profile.jpg')} 
            source={require('../../../assets/collectibles/icon.png')} 
            style={styles.profileImage} 
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.walletButton} onPress={handleWalletPress}>
          <Icon name="wallet" size={20} color={COLORS.gold} />
          <Text style={styles.walletText}>124.5 SOL</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search collectibles..."
          placeholderTextColor="#999"
        />
      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon name="star" size={20} color={COLORS.gold} />
          <Text style={styles.sectionTitle}>Hot Collectibles</Text>
        </View>
        
        <FlatList
          data={hotCollectibles}
          renderItem={renderHotCollectible}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.hotCollectiblesContainer}
        />
      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon name="trending-up" size={20} color={COLORS.gold} />
          <Text style={styles.sectionTitle}>Trending Collectibles</Text>
        </View>
        
        <View style={styles.grid}>
          {trendingCollectibles.map((item) => (
            <TouchableOpacity 
              key={item.id}
              style={styles.gridItem}
              onPress={() => handleCollectiblePress(item.id)}
            >
              <Image source={item.image} style={styles.gridItemImage} />
              <View style={styles.gridItemInfo}>
                <Text style={styles.gridItemName}>{item.name}</Text>
                <View style={styles.gridItemStats}>
                  <Text style={styles.gridItemPrice}>{item.price} SOL</Text>
                  <Text style={[
                    styles.gridItemChange,
                    styles.positiveChange
                  ]}>
                    +{item.change}%
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon name="clock" size={20} color={COLORS.gold} />
          <Text style={styles.sectionTitle}>Recently Minted</Text>
        </View>
        
        <View style={styles.grid}>
          {recentlyMinted.map((item) => (
            <TouchableOpacity 
              key={item.id}
              style={styles.gridItem}
              onPress={() => handleCollectiblePress(item.id)}
            >
              <Image source={item.image} style={styles.gridItemImage} />
              <View style={styles.gridItemInfo}>
                <Text style={styles.gridItemName}>{item.name} #{item.id}</Text>
                <View style={styles.gridItemStats}>
                  <Text style={styles.gridItemPrice}>{item.price} SOL</Text>
                  <Text style={styles.gridItemTime}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon name="trending-up" size={20} color={COLORS.gold} />
          <Text style={styles.sectionTitle}>Top Gainers(24h)</Text>
        </View>
        
        <View style={styles.grid}>
          {topGainers.map((item) => (
            <TouchableOpacity 
              key={item.id}
              style={styles.gridItem}
              onPress={() => handleCollectiblePress(item.id)}
            >
              <Image source={item.image} style={styles.gridItemImage} />
              <View style={styles.gridItemInfo}>
                <Text style={styles.gridItemName}>{item.name}</Text>
                <View style={styles.gridItemStats}>
                  <Text style={styles.gridItemPrice}>{item.price} SOL</Text>
                  <Text style={[
                    styles.gridItemChange,
                    styles.positiveChange
                  ]}>
                    +{item.change}%
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 24,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  walletButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 24,
    paddingHorizontal: 16,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    height: '100%',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 8,
  },
  hotCollectiblesContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  hotCollectibleCard: {
    width: 250,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    overflow: 'hidden',
  },
  hotCollectibleImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  hotCollectibleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  hotCollectibleName: {
    color: 'white',
    fontWeight: '500',
  },
  hotCollectibleId: {
    color: '#999',
    fontSize: 12,
  },
  hotCollectiblePrice: {
    color: COLORS.gold,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  gridItem: {
    width: '48%',
    marginBottom: 16,
  },
  gridItemImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  gridItemInfo: {
    flex: 1,
  },
  gridItemName: {
    color: 'white',
    fontWeight: '500',
  },
  gridItemStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridItemPrice: {
    color: '#999',
  },
  gridItemChange: {
    fontSize: 12,
  },
  gridItemTime: {
    color: '#999',
    fontSize: 12,
  },
  positiveChange: {
    color: '#4CAF50',
  },
  negativeChange: {
    color: '#F44336',
  },
  collectibleItem: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 8,
    marginBottom: 8,
  },
  collectibleItemImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
  collectibleItemInfo: {
    flex: 1,
  },
  collectibleItemName: {
    color: 'white',
    fontWeight: '500',
  },
  collectibleItemStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  collectibleItemPrice: {
    color: '#999',
  },
  collectibleItemChange: {
    fontSize: 12,
  },
  bottomPadding: {
    height: 80,
  },
});

export default HomeScreen;