import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useRouter } from 'expo-router';

const { width: screenWidth } = Dimensions.get('window');

type CarouselItem = {
  title: string;
  text: string;
  image: any;
};

// 🛠 Använd relativ path istället för "@/..." för säker laddning
const data: CarouselItem[] = [
  {
    title: 'Välkommen!',
    text: 'Upptäck vår app.',
    image: require('../assets/images/onboarding1.jpg'),
  },
  {
    title: 'Logga in!',
    text: 'Hantera ditt konto.',
    image: require('../assets/images/onboarding2.jpg'),
  },
  {
    title: 'Utforska!',
    text: 'Hitta nya funktioner.',
    image: require('../assets/images/onboarding3.jpg'),
  },
];

const OnboardingCarousel = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        console.log('Navigating to /login');
        router.push('/Login');
      }}
      style={styles.slideContainer}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={screenWidth}
        height={550}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={800}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slideContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    borderRadius: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default OnboardingCarousel;
