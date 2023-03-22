import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8} /*PARA QUE NO SE HAGA TAN NEGRO*/
      onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856D6" size={20} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="#5856D6" size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  itemText: {
    marginLeft: 8,
    fontSize: 20,
  },
});
