import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true, //TRUE para slir de la alerta tocando por fuera de ella
        onDismiss: () => console.log('onDismiss'), //controla lo que realiza cuando se tipea por fuera de la alerta
      },
    );
  };
  const showPrompt = () => {
    //SOLO PARA IOS
    Alert.prompt('¿Esta Seguro?');
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;

// const styles = StyleSheet.create({});
