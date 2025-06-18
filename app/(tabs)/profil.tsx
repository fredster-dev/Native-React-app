import { Text, View, StyleSheet } from 'react-native';

export default function ProfilScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text style={styles.screen}className="text-white text-lg">Profile Screen 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉</Text>
      <Text style={styles.screen}className="text-white text-lg"> 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉</Text>
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
  screen: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    padding: 250,
  },
});
