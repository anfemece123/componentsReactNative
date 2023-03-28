import {View, Text, Switch, Platform} from 'react-native';
import React, {useState, useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View>
      <Switch
        trackColor={{false: colors.notification, true: colors.primary}}
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustomSwitch;
