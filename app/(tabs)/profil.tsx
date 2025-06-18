import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated, Image, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ProfilScreen() {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const direction = useRef({ x: 1, y: 1 }).current;

  useEffect(() => {
    const interval = setInterval(() => {
      position.stopAnimation((currentPosition) => {
        const currentX = currentPosition.x;
        const currentY = currentPosition.y;

        let nextX = currentX + direction.x * 5;
        let nextY = currentY + direction.y * 5;

        if (nextX <= 0 || nextX >= width - 100) direction.x *= -1;
        if (nextY <= 0 || nextY >= height - 50) direction.y *= -1;

        position.setValue({ x: nextX, y: nextY }); //ai ville lägga getValue här, men finns inte i Animated.ValueXY
      });
    }, 16);

    return () => clearInterval(interval);
  }, [position, direction]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/dvd-logo.png')}
        style={[
          styles.dvdLogo,
          {
            transform: position.getTranslateTransform(),
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
    backgroundColor: '#000',
  },
  dvdLogo: {
    width: 100,
    height: 50,
    position: 'absolute',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -width * 0.25 }, { translateY: -12 }],
    pointerEvents: 'none',
  },
});