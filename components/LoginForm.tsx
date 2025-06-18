import React, { useState } from 'react';
import styles from './LoginFormStyles';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardTypeOptions,
  Dimensions,
} from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseconfig';
import * as Animatable from 'react-native-animatable';
import { Image } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window'); // För att få skärmens dimensioner

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
        router.push('/congrats'); // Navigera till "Grattis"-sidan
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Konto skapat! Du kan nu logga in.');
      }
      setError('');
    } catch (e: any) {
      console.error('Firebase auth error:', e);
      if (e.code === 'auth/email-already-in-use') {
        setError('E-postadressen används redan.');
      } else if (e.code === 'auth/weak-password') {
        setError('Lösenordet är för svagt. Det måste vara minst 6 tecken långt.');
      } else if (e.code === 'auth/invalid-email') {
        setError('E-postadressen är ogiltig.');
      } else if (e.code === 'auth/user-not-found') {
        setError('Användaren finns inte. Kontrollera e-postadressen.');
      } else if (e.code === 'auth/wrong-password') {
        setError('Fel lösenord. Försök igen.');
      } else {
        setError('Ett okänt fel inträffade. Försök igen.');
      }
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

      {/* Pingvin-knappen */}
      <Animatable.View
          animation={{
            0: { translateX: -width / 2 },
            0.5: { translateX: width / 2 },
            1: { translateX: -width / 2 },
          }}
          iterationCount="infinite"
          direction="alternate"
          duration={5000} // Gör rörelsen långsammare (5 sekunder per cykel)
          style={{ position: 'absolute', top: 100, alignSelf: 'center' }}
        >
          <TouchableOpacity onPress={handleSubmit}>
            <Image
              source={require('@/assets/images/pingvin.png')}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
      </Animatable.View>

      {/* Registreringsknappen */}
      {!isLogin && (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrera dig</Text>
        </TouchableOpacity>
      )}

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