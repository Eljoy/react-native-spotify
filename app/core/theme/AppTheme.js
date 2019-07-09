import React from "react";
import Theme from "../types/Theme";
import DefaultTheme from "./DefaultTheme";
import Children from "../types/Children";

const AppThemeContext = React.createContext();

function withAppTheme(Component) {
  return (props) => (
    <AppThemeContext.Consumer>
      {theme => (
        <Component
          {...props}
          theme={theme}
        />
      )}
    </AppThemeContext.Consumer>
  );
}

const AppThemeProvider = ({ theme, children }) => (
  <AppThemeContext.Provider value={theme}>
    {children}
  </AppThemeContext.Provider>
);

AppThemeProvider.propTypes = {
  theme: Theme,
  children: Children
};

AppThemeProvider.defaultProps = {
  theme: DefaultTheme,
  children: null
};

export { AppThemeProvider, withAppTheme };
