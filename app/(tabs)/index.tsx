import { StyleSheet, ImageBackground } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')} 
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

export default HomeScreen;

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
    backgroundColor: 'transparent', 
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
