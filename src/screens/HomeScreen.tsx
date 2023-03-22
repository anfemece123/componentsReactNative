import {View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from '../theme/AppTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name} //siempre tiene que ser un string// genera llave unica
        ListHeaderComponent={() => <HeaderTitle title="Componentes RN" />} //header de la flatList
        ItemSeparatorComponent={() => <ItemSeparator />} // linea de separacion entre items
      />
    </View>
  );
};

export default HomeScreen;
