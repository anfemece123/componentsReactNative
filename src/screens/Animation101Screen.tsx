import {Animated, Button, Easing, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {useAnimation} from '../hooks/useAnimation';

export default function Animation101Screen() {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: opacity,
          transform: [
            {
              translateX: position,
            },
          ],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          fadeOut();
          startMovingPosition(-100);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
