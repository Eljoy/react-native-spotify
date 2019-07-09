import React from "react";

import Block from "./Block";
import { withAppTheme } from "../../theme/AppTheme";

const AppBackground = ({ style, theme, children, ...props }) => {
  const appBackgroundStyle = {
    ...style,
    flex: 1,
    backgroundColor: theme.colors.background
  };

  return (
    <Block style={appBackgroundStyle} {...props}>
      {children}
    </Block>
  );
};

AppBackground.propTypes = {
  ...Block.propTypes
};

export default withAppTheme(AppBackground);
