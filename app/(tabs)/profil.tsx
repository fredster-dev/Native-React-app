import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated, Image, Text } from 'react-native';

const { width, height } = Dimensions.get('window'); // Skärmens dimensioner

export default function ProfilScreen() {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current; // Skapa en Animated.ValueXY
  const direction = useRef({ x: 1, y: 1 }).current; // Riktning: 1 = framåt, -1 = bakåt

  useEffect(() => {
    const interval = setInterval(() => {
      position.stopAnimation((currentPosition) => {
        const currentX = currentPosition.x;
        const currentY = currentPosition.y;

        let nextX = currentX + direction.x * 5; // Flytta 5 pixlar per steg
        let nextY = currentY + direction.y * 5;

        // Kolla om vi träffar kanterna och ändra riktning
        if (nextX <= 0 || nextX >= width - 100) direction.x *= -1; // 100 är bildens bredd
        if (nextY <= 0 || nextY >= height - 50) direction.y *= -1; // 50 är bildens höjd

        // Uppdatera positionen
        position.setValue({ x: nextX, y: nextY });
      });
    }, 16); // Uppdatera varje 16ms (60 FPS)

    return () => clearInterval(interval); // Rensa intervallet vid avmontering
  }, [position, direction]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/dvd-logo.png')} // Lägg till din bild här
        style={[
          styles.dvdLogo,
          {
            transform: position.getTranslateTransform(), // Använd positionen för att flytta bilden
          },
        ]}
      />
      <Text style={styles.welcomeText}>Välkommen till profilen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Svart bakgrund för DVD-effekt
  },
  dvdLogo: {
    width: 100, // Bildens bredd
    height: 50, // Bildens höjd
    position: 'absolute', // Gör att bilden kan röra sig fritt
  },
  welcomeText: {
    color: '#fff', // Vit text
    fontSize: 24, // Stor text
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute', // Placera texten i mitten
    top: '50%', // Placera texten vertikalt centrerad
    left: '50%', // Placera texten horisontellt centrerad
    transform: [{ translateX: -width * 0.25 }, { translateY: -12 }], // Justera för att centrera texten exakt
    pointerEvents: 'none', // Gör texten icke-blockerande
  },
});