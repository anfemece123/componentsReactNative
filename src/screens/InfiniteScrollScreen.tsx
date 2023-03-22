import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let index = 0; index < 5; index++) {
      newArray[index] = numbers.length + index;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1000);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{width: '100%', height: 400, borderRadius: 10}}
      />
      // <Image
      //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      //   style={{width: '100%', height: 400}}
      // />
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()} //se espera un string
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        onEndReached={loadMore} //cargar los  elementos
        onEndReachedThreshold={0.5} //hasta donde llegar
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <ActivityIndicator size={30} color="5856D6" />
          </View>
        )}
      />
    </View>
  );
};
export default InfiniteScrollScreen;

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
