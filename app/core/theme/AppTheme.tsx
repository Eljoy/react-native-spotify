import React from 'react';
import Theme from '../types/Theme';
import DefaultTheme from './DefaultTheme';

const AppThemeContext = React.createContext(DefaultTheme);

export interface WithAppThemeProps {
  theme: Theme;
}

function withAppTheme<P>(
  Component: React.ComponentType<P & WithAppThemeProps>
) {
  return (props: P) => {
    return (
      <AppThemeContext.Consumer>
        {(theme: Theme) => <Component {...props} theme={theme} />}
      </AppThemeContext.Consumer>
    );
  };
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

export { AppThemeProvider, withAppTheme };
