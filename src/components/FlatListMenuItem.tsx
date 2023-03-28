import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useTheme} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  // const {colors} = useTheme();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8} /*PARA QUE NO SE HAGA TAN NEGRO*/
      onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={colors.primary} size={20} />
        <Text style={{...styles.itemText, color: colors.text}}>
          {menuItem.name}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color={colors.primary} size={20} />
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
