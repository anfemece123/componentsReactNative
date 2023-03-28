import React, {createContext, useReducer, useEffect} from 'react';
import {lightTheme, themeReducer, ThemeState, darkTheme} from './ThemeReducer';
import {useColorScheme, AppState, Appearance} from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLinghtTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLinghtTheme()
          : setDarkTheme;
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDark');
  };
  const setLinghtTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setLinght');
  };
  return (
    <ThemeContext.Provider value={{setDarkTheme, setLinghtTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
