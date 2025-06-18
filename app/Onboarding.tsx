import React from 'react';
import { View, StyleSheet } from 'react-native';
import OnboardingCarousel from '@/components/OnboardingCarousel';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <OnboardingCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Onboarding;
