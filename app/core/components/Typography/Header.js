import React from "react";
import AppText from "./AppText";

const Header = ({ ...props }) => (
  <AppText size={3} {...props}/>
);

export default Header;
