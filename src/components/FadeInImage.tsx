import {
  View,
  Text,
  Animated,
  ActivityIndicator,
  ImageStyle,
  StyleProp,
} from 'react-native';
import React, {useState} from 'react';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(false);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="#5856D6"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          ...(style as any),
          opacity: opacity,
        }}
      />
    </View>
  );
};

export default FadeInImage;
