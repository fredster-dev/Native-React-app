import { Text, View, StyleSheet } from 'react-native';

export default function ProfilScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-lg">Profil Screen 🎉</Text>
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
