import { Image } from 'expo-image';
import { Platform, StyleSheet, ImageBackground } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TestComp from '@/components/Testcomp';
import LoginForm from '@/components/LoginForm';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native';



export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')} // Byt ut till din egen bild
      style={styles.background}
      resizeMode="cover"
    >
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="title" style={[styles.titleText, { backgroundColor: 'transparent' }]}>
        Welcome to my 100%
      </ThemedText>
      <ThemedText type="title" style={[styles.titleText, { backgroundColor: 'transparent' }]}>
        fixed homepage!
      </ThemedText>
      <HelloWave />
    </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'transparent', 
  },
  titleText: {
    textAlign: 'center',
    fontSize: 24, 
    flexWrap: 'wrap',
    backgroundColor: 'transparent', // Ta bort bakgrunden
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
