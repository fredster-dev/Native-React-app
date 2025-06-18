import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function CongratsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grattis!</Text>
      <Text style={styles.message}>Du är nu inloggad 🎉</Text>
      <Button 
        title="Gå till startsidan"
        onPress={() => router.push('/')} 
      />
      <Button 
        title="Gå till profilsidan"
        onPress={() => router.push('/profil')} 
        color="yellow" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    width: '80%',
    marginVertical: 10,
    marginTop: 20,
  },
});