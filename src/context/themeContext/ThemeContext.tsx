import React, {createContext, useReducer} from 'react';
import {lightTheme, themeReducer, ThemeState} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLinghtTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

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
