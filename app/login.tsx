
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseconfig';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/'); // Skicka användaren till hemfliken
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logga in</Text>
      <TextInput style={styles.input} placeholder="E-post" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Lösenord" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Logga in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.link}>Har du inget konto? Registrera dig här</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { backgroundColor: '#eee', padding: 15, borderRadius: 10, marginBottom: 10 },
  button: { backgroundColor: '#3366FF', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white', textAlign: 'center' },
  link: { color: '#3366FF', marginTop: 10, textAlign: 'center' },
});
