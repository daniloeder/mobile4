
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import Icon from '../ui/Icon';
import { COLORS, BORDER_RADIUS, FONT_SIZE } from '../../styles/theme';

interface AlertItem {
  id: string;
  symbol: string;
  message: string;
  timeAgo: string;
  type: 'positive' | 'negative' | 'neutral';
}

const AlertsScreen = () => {
  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.goBack();
  };
  
  const alertItems: AlertItem[] = [
    {
      id: '1',
      symbol: '$SWIFT',
      message: "is up 82% today. Don't miss the breakout!",
      timeAgo: '2h ago',
      type: 'positive',
    },
    {
      id: '2',
      symbol: '$KOBE',
      message: "just 10x'd in 24h. You're officially in the 10x Club.",
      timeAgo: '5h ago',
      type: 'positive',
    },
    {
      id: '3',
      symbol: '$TRUMP',
      message: "is down 48% in the last hour. Are holders panicking?",
      timeAgo: '30m ago',
      type: 'negative',
    },
    {
      id: '4',
      symbol: '$KOBE',
      message: "just 10x'd in 24h. You're officially in the 10x Club.",
      timeAgo: '5h ago',
      type: 'positive',
    },
    {
      id: '5',
      symbol: '$KANYE',
      message: "just dropped 30% — sell pressure building fast.",
      timeAgo: '2h ago',
      type: 'negative',
    },
    {
      id: '6',
      symbol: '$KOBE',
      message: "just 10x'd in 24h. You're officially in the 10x Club.",
      timeAgo: '5h ago',
      type: 'positive',
    },
  ];

  return (
    <View style={styles.container}>
      <NavHeader title="Alerts" onBack={handleBack} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {alertItems.map((alert) => (
          <View key={alert.id} style={styles.alertCard}>
            <View 
              style={[
                styles.alertIndicator, 
                { 
                  backgroundColor: 
                    alert.type === 'positive' 
                      ? COLORS.green 
                      : alert.type === 'negative' 
                      ? COLORS.red 
                      : '#888'
                }
              ]} 
            />
            <View style={styles.alertContent}>
              <View style={styles.tokenIcon}>
                <Image 
                  source={require('../../../assets/icons/bitcoin.png')}
                  style={styles.iconImage}
                />
              </View>
              <View style={styles.alertMessage}>
                <Text style={styles.messageText}>
                  <Text style={styles.symbolText}>{alert.symbol}</Text> {alert.message}
                </Text>
                <Text style={styles.timeText}>{alert.timeAgo}</Text>
              </View>
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 12,
  },
  alertCard: {
    flexDirection: 'row',
    backgroundColor: '#17171F',
    borderRadius: BORDER_RADIUS.xl,
    overflow: 'hidden',
    marginBottom: 12,
  },
  alertIndicator: {
    width: 6,
    height: '100%',
  },
  alertContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  tokenIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#222',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  alertMessage: {
    flex: 1,
  },
  messageText: {
    color: 'white',
    fontSize: FONT_SIZE.md,
    marginBottom: 4,
  },
  symbolText: {
    fontWeight: '700',
  },
  timeText: {
    color: '#888',
    fontSize: FONT_SIZE.sm,
  }
});

export default AlertsScreen;
