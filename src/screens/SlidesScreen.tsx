import {
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import React from 'react';
import {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export default function SlidesScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const {opacity, fadeIn} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={{...styles.title, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.subtitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: 'red',
        paddingTop: 50,
      }}>
      <Carousel
        //   ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth} //ancho del slider
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
        }} // para ver donde esta la pagina
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex} //para saber donde se encuentra la paginacion
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />

        {activeIndex === 2 ? (
          <Animated.View
            style={{
              opacity: opacity,
            }}
            onLayout={() => fadeIn()}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: colors.primary,
                width: 130,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('HomeScreen' as never)}>
              <Text style={{fontSize: 25, color: 'white'}}>Entrar</Text>
              <Icon name="chevron-forward-outline" color="white" size={30} />
            </TouchableOpacity>
          </Animated.View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});
