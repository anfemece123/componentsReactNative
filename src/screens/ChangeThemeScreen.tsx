import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/AppTheme';
import HeaderTitle from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLinghtTheme,
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}
          onPress={() => setDarkTheme()}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
            }}>
            Dark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}
          onPress={() => setLinghtTheme()}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
            }}>
            Ligth
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;

// const styles = StyleSheet.create({});
