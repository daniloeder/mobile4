import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import Icon from '../ui/Icon';
import { COLORS, FONT_SIZE } from '../../styles/theme';

const CollectibleDetailScreen = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const handleShare = () => {
        navigation.navigate('FlexShare' as never);
    };

    const handleBuy = () => {
        navigation.navigate('BuyToken' as never);
    };

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [414, 750, 732, 133, 149, 352],
                color: () => 'rgba(198, 176, 108, 0.54)',
                strokeWidth: 2
            }
        ]
    };

    return (
        <View style={styles.container}>
            <NavHeader title="Collectible" onBack={handleBack} />

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
                <View style={styles.assetContainer}>
                    <Icon name="image" size={48} color="#999" />
                    <Text style={styles.assetText}>Collectible Asset</Text>
                    <Text style={styles.assetDescription}>
                        This digital collectible represents ownership of a unique token on the StreetX platform
                    </Text>
                </View>

                <View style={styles.infoCard}>
                    <View style={styles.titleContainer}>
                        <View>
                            <Text style={styles.title}>Elon Musk</Text>
                            <Text style={styles.symbol}>$ELON</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>$42.69</Text>
                            <Text style={styles.change}>↑ 5.32%</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.statsCard}>
                    <View style={styles.statsGrid}>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Market Cap</Text>
                            <Text style={styles.statValue}>$4.3M</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Liquidity</Text>
                            <Text style={styles.statValue}>$850.0K</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Volume</Text>
                            <Text style={styles.statValue}>$320.0K</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Created</Text>
                            <Text style={styles.statValue}>Mar 15, 2024</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.chartCard}>
                    <View style={styles.chartHeader}>
                        <View style={styles.chartTitleContainer}>
                            <Icon name="activity" size={20} color={COLORS.gold} />
                            <Text style={styles.chartTitle}>Price Chart</Text>
                        </View>

                        <View style={styles.timeframeContainer}>
                            <TouchableOpacity style={styles.timeframeButton}>
                                <Text style={styles.timeframeText}>1H</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.timeframeButton, styles.activeTimeframe]}>
                                <Text style={styles.timeframeText}>24H</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.timeframeButton}>
                                <Text style={styles.timeframeText}>7D</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.chartPlaceholder}>
                        <LineChart
                            data={chartData}
                            width={320}
                            height={180}
                            chartConfig={{
                                backgroundColor: '#232336',
                                backgroundGradientFrom: '#232336',
                                backgroundGradientTo: '#232336',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(198, 176, 108, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#c6b06c"
                                }
                            }}
                            bezier
                            style={{
                                borderRadius: 16
                            }}
                        />
                    </View>
                </View>

                <View style={styles.actionCard}>
                    <View style={styles.actionButtons}>
                        <CustomButton
                            title="Buy"
                            onPress={handleBuy}
                            style={styles.buyButton}
                        />
                        <CustomButton
                            title="Sell"
                            onPress={() => { }}
                            primary={false}
                            style={styles.sellButton}
                        />
                    </View>
                </View>

                <View style={styles.actionCard}>
                    <CustomButton
                        title="Share Your Gain"
                        onPress={handleShare}
                        primary={false}
                        style={styles.shareYourGainButton}
                    />
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
    assetContainer: {
        height: 240,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    assetText: {
        color: '#999',
        marginTop: 12,
        fontSize: 16,
    },
    assetDescription: {
        color: '#777',
        textAlign: 'center',
        marginTop: 8,
        maxWidth: 280,
    },
    infoCard: {
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        borderRadius: 12,
        padding: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    symbol: {
        color: '#999',
    },
    priceContainer: {
        alignItems: 'flex-end',
    },
    price: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    change: {
        color: '#4CAF50',
    },
    statsCard: {
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        borderRadius: 12,
        padding: 16,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    statItem: {
        width: '50%',
        marginBottom: 16,
    },
    statLabel: {
        color: '#999',
        fontSize: 14,
        marginBottom: 4,
    },
    statValue: {
        color: 'white',
        fontWeight: '500',
    },
    chartCard: {
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        borderRadius: 12,
        padding: 16,
    },
    chartHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    chartTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chartTitle: {
        color: COLORS.gold,
        fontWeight: '500',
        marginLeft: 8,
    },
    timeframeContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    timeframeButton: {
        backgroundColor: 'black',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    activeTimeframe: {
        backgroundColor: '#333',
    },
    timeframeText: {
        color: 'white',
        fontSize: 12,
    },
    chartPlaceholder: {
        height: 180,
        backgroundColor: 'rgba(198, 176, 108, 0.1)',
        borderRadius: 8,
    },
    actionCard: {
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        borderRadius: 12,
        padding: 16,
    },
    actionButtons: {
        flexDirection: 'row',
        gap: 16,
    },
    buyButton: {
        flex: 1,
        borderRadius: 120,
    },
    sellButton: {
        flex: 1,
        borderRadius: 120,
    },
    shareYourGainButton: {
        borderRadius: 120
    }
});

export default CollectibleDetailScreen;
