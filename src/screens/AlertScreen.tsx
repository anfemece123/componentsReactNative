import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/AppTheme';

import HeaderTitle from '../components/HeaderTitle';
import prompt from 'react-native-prompt-android';

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
    // Alert.prompt(
    //   '¿Esta Seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info:', typeof valor),
    //   'plain-text',
    //   'Hola mundo',
    //   'number-pad', //tipo de teclado
    // );

    //PARA ANDROID - IOS
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

export default AlertScreen;

// const styles = StyleSheet.create({});
