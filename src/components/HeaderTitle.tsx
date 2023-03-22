import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/AppTheme';

interface Props {
  title: string;
}

const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets(); // notch de iphone para que no quede tan arriba
  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={{...styles.title, color: '#5856D6'}}> {title}</Text>
    </View>
  );
};

export default HeaderTitle;
