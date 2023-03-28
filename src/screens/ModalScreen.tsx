import {StyleSheet, View, Button, Modal, Text} from 'react-native';
import React, {useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export default function ModalScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button
        title="Abrir modal"
        onPress={() => setIsVisible(true)}
        color={colors.primary}
      />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        {/* Background black */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}> Modal</Text>
            <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>
              Cuerpo del modal
            </Text>
            <Button
              title="Cerrar"
              onPress={() => setIsVisible(false)}
              color={colors.primary}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
