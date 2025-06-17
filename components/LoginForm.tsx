import React, { useState } from 'react';
import styles from './LoginFormStyles';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardTypeOptions
} from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseconfig';
// Import the router from expo-router
import { useRouter } from 'expo-router';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

  const handleSubmit = async () => {
    if (!isLogin && password !== confirmPassword) {
      alert('Lösenorden matchar inte!');
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
        // Clear input fields and error message
      setError('');
    } catch (e) {
      console.error('Firebase auth error:', e);
      setError('Fel användarnamn eller lösenord!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Logga in' : 'Skapa Konto'}</Text>

      <Text style={styles.label}>E-Post</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Lösenord</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {!isLogin && (
        <>
          <Text style={styles.label}>Bekräfta Lösenord</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </>
      )}

      {error.length > 0 && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{isLogin ? 'Logga in' : 'Registrera dig'}</Text>
      </TouchableOpacity>

      <View style={styles.regtextContainer}>
        <Text style={styles.regtextLabel}>
          {isLogin ? 'Har du inget konto?' : 'Har du redan ett konto?'}
        </Text>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.regtext}>
            {isLogin ? 'Registrera dig här' : 'Logga in här'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;