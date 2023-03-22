import {View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from '../theme/AppTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';

const HomeScreen = () => {
  const itemSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.3, marginVertical: 8}} />
    );
  };
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name} //siempre tiene que ser un string// genera llave unica
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />} //header de la flatList
        ItemSeparatorComponent={() => itemSeparator()} // linea de separacion entre items
      />
    </View>
  );
};

export default HomeScreen;
