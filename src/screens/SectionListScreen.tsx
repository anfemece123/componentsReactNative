import {SectionList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import ItemSeparator from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export default function SectionListScreen() {
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />} // titulo del section list
        ListFooterComponent={() => (
          <View style={{marginBottom: 60, backgroundColor: colors.background}}>
            <HeaderTitle title={'Total de casas' + casas.length} />
          </View>
        )} //Lo que se renderiza al finalizar
        stickySectionHeadersEnabled={true} //para que se mantenga el titulo de la lista
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )} // en cada uno de las listas
        renderSectionFooter={({section}) => (
          <HeaderTitle title={`total ${section.data.length}`} />
        )}
        SectionSeparatorComponent={() => <ItemSeparator />} // separador de secciones
        // ItemSeparatorComponent={() => <ItemSeparator />} // separador por item

        showsVerticalScrollIndicator={false} //quita el scroll vertical
      />
    </View>
  );
}

// const styles = StyleSheet.create({});
