import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../../components/LoginForm'; // Adjust the path if LoginForm is in a different folder

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginForm /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});