import { Text, View, StyleSheet } from 'react-native';
// In ProfilScreen.tsx
import { auth } from '../../firebase/firebaseconfig'
import { signOut } from 'firebase/auth';
import { Button } from 'react-native';

export default function ProfilScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // RootLayout kommer då redirecta till login automatiskt
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-lg">Profil Screen 🎉</Text>
      <Button title="Logga ut" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
