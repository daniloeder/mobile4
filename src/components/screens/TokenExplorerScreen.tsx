import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../ui/CustomButton';
import { COLORS } from '../../styles/theme';
import Icon from '../ui/Icon';

const tokenData = [
    {
        id: '1',
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '$62,134.21',
        change: -1.32,
        image: require('../../../assets/icons/bitcoin.png')
    },
    {
        id: '2',
        name: 'Ethereum',
        symbol: 'ETH',
        price: '$3,450.78',
        change: 2.54,
        image: require('../../../assets/icons/ethereum.png')
    },
    {
        id: '3',
        name: 'Solana',
        symbol: 'SOL',
        price: '$3,450.78',
        change: 2.54,
        image: require('../../../assets/icons/solana.png')
    },
    {
        id: '4',
        name: 'Uniswap',
        symbol: 'UNI',
        price: '$3,450.78',
        change: 2.54,
        image: require('../../../assets/icons/uniswap.png')
    },
    {
        id: '5',
        name: 'Axie Infinity',
        symbol: 'AXS',
        price: '$62,134.21',
        change: -1.32,
        image: require('../../../assets/icons/axie.png')
    },
    {
        id: '6',
        name: 'Arbitrum',
        symbol: 'ARB',
        price: '$62,134.21',
        change: -1.32,
        image: require('../../../assets/icons/arbitrum.png')
    },
    {
        id: '7',
        name: 'Aave',
        symbol: 'AAVE',
        price: '$3,450.78',
        change: 2.54,
        image: require('../../../assets/icons/aave.png')
    }
];

const TokenExplorerScreen = () => {
    const navigation = useNavigation();

    const handleMint = () => {
        navigation.navigate('LaunchCollectible');
    };

    const renderTokenItem = ({ item }) => (
        <View style={styles.tokenItem}>
            <View style={styles.tokenLeft}>
                <Image source={item.image} style={styles.tokenIcon} />
                <View>
                    <Text style={styles.tokenName}>{item.name}</Text>
                    <Text style={styles.tokenSymbol}>{item.symbol}</Text>
                </View>
            </View>
            <View style={styles.tokenRight}>
                <Text style={styles.tokenPrice}>{item.price}</Text>
                <Text style={item.change >= 0 ? styles.positiveChange : styles.negativeChange}>
                    {item.change >= 0 ? '+' : ''}{item.change}%
                </Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity>
                            <Icon name="menu" size={24} color="white" />
                        </TouchableOpacity>
                        <Image
                            source={require('../../../assets/logo.jpg')}
                            style={styles.logoImage}
                        />
                    </View>
                    <CustomButton
                        title="Mint Your First ICO"
                        onPress={handleMint}
                        style={styles.mintButton}
                        textStyle={styles.mintButtonText}
                    />
                </View>

                <Text style={styles.title}>Token Explorer</Text>
                <Text style={styles.subtitle}>Browse and discover top tokens across various categories</Text>

                <View style={styles.filterContainer}>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>All Tokens</Text>
                        <Icon name="chevron-down" size={12} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>↕ Market Cap</Text>
                        <Icon name="chevron-down" size={12} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.listHeader}>
                <Text style={styles.listHeaderText}>Token</Text>
                <Text style={styles.listHeaderText}>Price</Text>
            </View>

            <FlatList
                data={tokenData}
                renderItem={renderTokenItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        backgroundColor: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoImage: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    mintButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        height: 36,
    },
    mintButtonText: {
        fontSize: 14,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
    },
    subtitle: {
        color: '#999',
        fontSize: 14,
        marginBottom: 16,
    },
    filterContainer: {
        flexDirection: 'row',
        gap: 8,
        marginVertical: 16,
    },
    filterButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    filterText: {
        color: 'white',
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    listHeaderText: {
        color: 'white',
        fontWeight: '500',
    },
    listContent: {
        paddingHorizontal: 16,
    },
    tokenItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    tokenLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tokenIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
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
    positiveChange: {
        color: '#4CAF50',
        fontSize: 14,
    },
    negativeChange: {
        color: '#F44336',
        fontSize: 14,
    },
});

export default TokenExplorerScreen;