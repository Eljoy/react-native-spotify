import React, { ProviderProps } from 'react';
import DefaultTheme from './defaultTheme';
import { Theme } from './types';

const AppThemeContext = React.createContext(DefaultTheme);
const useAppTheme = () => React.useContext(AppThemeContext);

interface AppThemeProviderProps extends Omit<ProviderProps<Theme>, 'value'> {
  value?: Theme;
}

const AppThemeProvider = ({
  value = DefaultTheme,
  ...props
}: AppThemeProviderProps) => (
  <AppThemeContext.Provider value={value} {...props} />
);

export { AppThemeProvider, useAppTheme };
