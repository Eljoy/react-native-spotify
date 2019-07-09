import React from "react";
import AppText from "./AppText";
import { spaceScale } from "../..";

const Header = ({ style, ...props }) => {
  const headerStyle = {
    ...style,
    margin: spaceScale[2],
    fontWeight: "bold"
  };

  return (
    <AppText size={4} {...props} style={headerStyle}/>
  );
};

Header.propTypes = {
  ...AppText.propTypes
};

export default Header;
