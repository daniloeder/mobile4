import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavHeader from '../ui/NavHeader';
import CustomButton from '../ui/CustomButton';
import { COLORS } from '../../styles/theme';
import Icon from '../ui/Icon';
import ProgressSteps from '../ui/ProgressSteps.';

const LaunchCollectibleScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectibleName, setCollectibleName] = useState('');
  const [collectibleSymbol, setCollectibleSymbol] = useState('$ELON');
  const navigation = useNavigation();

  const steps = [
    { id: 'name', title: 'Name' },
    { id: 'symbol', title: 'Symbol' },
    { id: 'category', title: 'Category' },
    { id: 'image', title: 'Image' },
    { id: 'summary', title: 'Summary' },
  ];

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigation.goBack();
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate('SuccessScreen');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Name of your Collectible</Text>
            <Text style={styles.stepLabel}>Collectible Name</Text>
            <TextInput
              style={styles.input}
              value={collectibleName}
              onChangeText={setCollectibleName}
              placeholder="Enter collectible name"
              placeholderTextColor="#777"
            />
          </View>
        );
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Symbol</Text>
            <Text style={styles.stepSubtitle}>Auto-generated based on collectible name</Text>
            <Text style={styles.stepLabel}>Collectible Name</Text>
            <TextInput
              style={styles.input}
              value={collectibleSymbol}
              onChangeText={setCollectibleSymbol}
              placeholder="Enter symbol"
              placeholderTextColor="#777"
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Select Category</Text>
            <Text style={styles.stepSubtitle}>Choose a category that best describes your collectibles</Text>
            <Text style={styles.stepLabel}>Collectible Name</Text>
            <TouchableOpacity style={styles.selectButton}>
              <Text style={styles.selectButtonText}>Select a Category</Text>
              <Icon name="chevron-down" size={20} color="white" />
            </TouchableOpacity>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>AI-Generated Image</Text>
            <Text style={styles.stepSubtitle}>Our AI will generate a unique image for your collectible</Text>
            <View style={styles.imagePreviewContainer}>
              <TouchableOpacity style={styles.generateButton}>
                <Text style={styles.generateButtonText}>Generate Image</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 4:
        return (
          <ScrollView style={styles.summaryContainer}>
            <Text style={styles.stepTitle}>Summary</Text>
            
            <View style={styles.pricingOptions}>
              {[
                { price: '1 SOL', tokens: '20M' },
                { price: '1.5 SOL', tokens: '30M' },
                { price: '2 SOL', tokens: '40M' },
                { price: '2.5 SOL', tokens: '50M' },
                { price: '3 SOL', tokens: '60M' },
                { price: '3.5 SOL', tokens: '70M' },
                { price: '4 SOL', tokens: '80M' },
                { price: '4.5 SOL', tokens: '90M' },
                { price: '5 SOL', tokens: '100M', selected: true },
              ].map((option, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={[
                    styles.pricingOption, 
                    option.selected && styles.selectedPricingOption
                  ]}
                >
                  <Text style={styles.pricingOptionText}>{option.price} / {option.tokens}</Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <Text style={styles.sectionTitle}>Supply Allocation</Text>
            <View style={styles.allocationList}>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationName}>• Minter (optional, locked for 90 days)</Text>
                <Text style={styles.allocationPercentage}>10%</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationName}>• Paired into Liquidity (LP on StreetX)</Text>
                <Text style={styles.allocationPercentage}>10%</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationName}>• StreetX Treasury</Text>
                <Text style={styles.allocationPercentage}>10%</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationName}>• Verifying Entity</Text>
                <Text style={styles.allocationPercentage}>10%</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationName}>• Locked for 90 days</Text>
                <Text style={styles.allocationPercentage}>30%</Text>
              </View>
              <View style={styles.allocationItem}>
                <Text style={styles.allocationName}>• Immediate public sale</Text>
                <Text style={styles.allocationPercentage}>30%</Text>
              </View>
            </View>
            
            <View style={styles.pieChart} />
            
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Name:</Text>
                <Text style={styles.detailValue}>Ashiqur</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Symbol:</Text>
                <Text style={styles.detailValue}>$ASHIQ</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Category:</Text>
                <Text style={styles.detailValue}></Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Custom Fee:</Text>
                <Text style={styles.detailValue}>N/A</Text>
              </View>
              <View style={styles.detailDivider} />
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Mining Fee:</Text>
                <Text style={styles.detailValue}>2 SOL</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={[styles.detailLabel, styles.totalLabel]}>Total:</Text>
                <Text style={[styles.detailValue, styles.totalValue]}>2 SOL</Text>
              </View>
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <NavHeader title="Launch a Collectible" onBack={handleBack} />
      
      <ProgressSteps 
        steps={steps} 
        currentStep={currentStep} 
      />
      
      {renderStep()}
      
      <View style={styles.buttonContainer}>
        <CustomButton
          title={currentStep === steps.length - 1 ? "Launch Collectible" : "Continue"}
          onPress={handleNext}
          style={styles.continueButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  stepContainer: {
    flex: 1,
    padding: 16,
  },
  stepTitle: {
    color: COLORS.gold,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  stepSubtitle: {
    color: '#999',
    fontSize: 16,
    marginBottom: 24,
  },
  stepLabel: {
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 8,
    color: 'white',
    padding: 16,
    fontSize: 16,
  },
  selectButton: {
    backgroundColor: '#333',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  selectButtonText: {
    color: '#999',
    fontSize: 16,
  },
  imagePreviewContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gold,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateButton: {
    backgroundColor: COLORS.gold,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  generateButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    padding: 16,
  },
  continueButton: {
    backgroundColor: COLORS.gold,
    height: 56,
  },
  summaryContainer: {
    flex: 1,
    padding: 16,
  },
  pricingOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  pricingOption: {
    width: '32%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  selectedPricingOption: {
    backgroundColor: COLORS.gold,
    borderColor: COLORS.gold,
  },
  pricingOptionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 16,
  },
  allocationList: {
    marginBottom: 16,
  },
  allocationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  allocationName: {
    color: '#ccc',
    flex: 1,
  },
  allocationPercentage: {
    color: '#ccc',
    fontWeight: '500',
  },
  pieChart: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.gold,
    alignSelf: 'center',
    marginVertical: 16,
  },
  detailsContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    color: '#999',
  },
  detailValue: {
    color: 'white',
    fontWeight: '500',
  },
  detailDivider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 8,
  },
  totalLabel: {
    color: 'white',
    fontWeight: '700',
  },
  totalValue: {
    fontWeight: '700',
  },
});

export default LaunchCollectibleScreen;