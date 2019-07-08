import React from "react";
import Theme from "../types/Theme";
import DefaultTheme from "./DefaultTheme";

const AppThemeContext = React.createContext();

function withAppTheme(Component) {
  return class extends React.Component {
    render() {
      const { props } = this;
      return (
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
  };
}

class AppThemeProvider extends React.Component {
  render() {
    const { theme, children } = this.props;
    return (
      <AppThemeContext.Provider value={theme}>
        {children}
      </AppThemeContext.Provider>
    );
  }
}

AppThemeProvider.propTypes = {
  theme: Theme
};

AppThemeProvider.defaultProps = {
  theme: DefaultTheme
};

export { AppThemeProvider, withAppTheme };
