import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import { COLORS } from '../../styles/theme';
import Icon from '../ui/Icon';

const screenWidth = Dimensions.get('window').width - 32;

const CollectibleDetailScreen = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    const handleShareGain = () => {
        navigation.navigate('FlexShare');
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

            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Icon name="image" size={48} color="#777" />
                    <Text style={styles.imageText}>Collectible Asset</Text>
                    <Text style={styles.imageDescription}>
                        This digital collectible represents ownership of a unique token on the StreetX platform
                    </Text>
                </View>

                <View style={styles.infoCard}>
                    <View style={styles.infoHeader}>
                        <View>
                            <Text style={styles.collectibleName}>Elon Musk</Text>
                            <Text style={styles.collectibleSymbol}>$ELON</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.collectiblePrice}>$42.69</Text>
                            <Text style={styles.collectibleChange}>↗ 5.32%</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.statsCard}>
                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Market Cap</Text>
                            <Text style={styles.statValue}>$4.3M</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Liquidity</Text>
                            <Text style={styles.statValue}>$850.0K</Text>
                        </View>
                    </View>
                    <View style={styles.statsRow}>
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
                        <View style={styles.chartTitle}>
                            <Icon name="trending-up" size={20} color={COLORS.gold} />
                            <Text style={styles.chartTitleText}>Price Chart</Text>
                        </View>
                        <View style={styles.timeButtons}>
                            <TouchableOpacity style={[styles.timeButton, styles.activeTimeButton]}>
                                <Text style={styles.timeButtonText}>1H</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.timeButton}>
                                <Text style={styles.timeButtonText}>24H</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.timeButton}>
                                <Text style={styles.timeButtonText}>7D</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.chart}>
                        {/* Chart would be rendered here */}
                        <View style={styles.chartLine} />
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

                <View style={styles.actionsCard}>
                    <View style={styles.actionButtons}>
                        <CustomButton
                            title="Buy"
                            onPress={() => { }}
                            style={styles.buyButton}
                        />
                        <CustomButton
                            title="Sell"
                            onPress={() => { }}
                            style={styles.sellButton}
                            textStyle={styles.sellButtonText}
                        />
                    </View>
                </View>

                <View style={styles.shareContainer}>
                    <CustomButton
                        title="Share Your Gain"
                        onPress={handleShareGain}
                        style={styles.shareButton}
                        textStyle={styles.shareButtonText}
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
        gap: 16,
    },
    imageContainer: {
        backgroundColor: '#333',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    imageText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 16,
    },
    imageDescription: {
        color: '#999',
        textAlign: 'center',
        marginTop: 8,
        paddingHorizontal: 24,
    },
    infoCard: {
        backgroundColor: '#777',
        borderRadius: 12,
        padding: 16,
    },
    infoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    collectibleName: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
    },
    collectibleSymbol: {
        color: '#ddd',
        fontSize: 16,
    },
    priceContainer: {
        alignItems: 'flex-end',
    },
    collectiblePrice: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    collectibleChange: {
        color: '#4CAF50',
        fontSize: 16,
    },
    statsCard: {
        backgroundColor: '#777',
        borderRadius: 12,
        padding: 16,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    statItem: {
        width: '48%',
    },
    statLabel: {
        color: '#ddd',
        fontSize: 14,
    },
    statValue: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    chartCard: {
        backgroundColor: '#777',
        borderRadius: 12,
        padding: 16,
    },
    chartHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        zIndex: 2
    },
    chartTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chartTitleText: {
        color: COLORS.gold,
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 8,
    },
    timeButtons: {
        flexDirection: 'row',
        backgroundColor: '#333',
        borderRadius: 20,
        padding: 4,
    },
    timeButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    activeTimeButton: {
        backgroundColor: '#000',
    },
    timeButtonText: {
        color: 'white',
        fontSize: 12,
    },
    chart: {
        height: 170,
        justifyContent: 'flex-end',
    },
    chartLine: {
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 8,
    },
    actionsCard: {
        backgroundColor: '#777',
        borderRadius: 12,
        padding: 16,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    buyButton: {
        flex: 1,
        backgroundColor: COLORS.gold,
    },
    sellButton: {
        flex: 1,
        backgroundColor: '#333',
    },
    sellButtonText: {
        color: 'white',
    },
    shareContainer: {
        backgroundColor: '#777',
        borderRadius: 12,
        padding: 16,
    },
    shareButton: {
        backgroundColor: '#333',
    },
    shareButtonText: {
        color: 'white',
    },
});

export default CollectibleDetailScreen;