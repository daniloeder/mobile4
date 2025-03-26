import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/theme';

const ProgressSteps = ({ steps, currentStep }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View 
          key={step.id} 
          style={[
            styles.step,
            index <= currentStep ? styles.activeStep : styles.inactiveStep,
            index < steps.length - 1 && styles.stepWithLine
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
  },
  step: {
    height: 4,
    flex: 1,
    borderRadius: 2,
  },
  stepWithLine: {
    marginRight: 8,
  },
  activeStep: {
    backgroundColor: COLORS.gold,
  },
  inactiveStep: {
    backgroundColor: '#333',
  },
});

export default ProgressSteps;