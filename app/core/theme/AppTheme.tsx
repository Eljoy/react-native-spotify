import React from 'react';
import Theme from '../types/Theme';
import DefaultTheme from './DefaultTheme';

const AppThemeContext = React.createContext(DefaultTheme);
const useAppTheme = () => React.useContext(AppThemeContext);

export interface WithAppThemeProps {
  theme: Theme;
}

interface AppThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

const AppThemeProvider = ({
  theme = DefaultTheme,
  ...props
}: AppThemeProviderProps) => (
  <AppThemeContext.Provider value={theme} {...props} />
);

export { AppThemeProvider, useAppTheme };
