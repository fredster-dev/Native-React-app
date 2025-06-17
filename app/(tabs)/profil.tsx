import { Text, View, StyleSheet } from 'react-native';
import { auth } from '../../firebase/firebaseconfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function ProfilScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/(auth)/login'); // Redirect to login after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen 🎉</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
  },
});