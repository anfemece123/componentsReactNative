import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ItemSeparator = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.2,
        marginVertical: 8,
        // backgroundColor: colors.border,
        borderColor: colors.border,
      }}
    />
  );
};

export default ItemSeparator;
