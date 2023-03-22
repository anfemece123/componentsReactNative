import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {useForm} from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView //para que se muestre el input cuando
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text inputs" />

          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="ingrese su nombre"
            autoCorrect={false} //no hace autocorreccion
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />

          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="ingrese su enamil"
            autoCorrect={false} //no hace autocorreccion
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address" //teclado para correos
            keyboardAppearance="dark" //solo para IOS teclado oscuro
          />
          <View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}>Suscribirse: </Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>

          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="ingrese su telefono"
            autoCorrect={false} //no hace autocorreccion
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad" //teclado numerico
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
