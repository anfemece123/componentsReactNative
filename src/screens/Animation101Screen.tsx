import {Animated, Button, Easing, StyleSheet, View} from 'react-native';
import React, {useRef, useContext} from 'react';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export default function Animation101Screen() {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: colors.primary,
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
        color={colors.primary}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          fadeOut();
          startMovingPosition(-100);
        }}
        color={colors.primary}
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
    width: 150,
    height: 150,
  },
});
