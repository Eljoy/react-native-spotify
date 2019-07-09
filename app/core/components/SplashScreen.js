import React from "react";
import { Dimensions, Image } from "react-native";
import PropTypes from "prop-types";
import Children from "../types/Children";
import splash from "../assets/images/splash.png";

const SplashScreen = ({ visible, children }) => {
  const { width, height } = Dimensions.get("window");

  const splashImage = (<Image
    style={{ width, height }}
    source={splash}
  />);

  return visible ? (splashImage) : (children);
};

SplashScreen.propTypes = {
  children: Children,
  visible: PropTypes.bool
};

SplashScreen.defaultProps = {
  children: null,
  visible: false
};

export default SplashScreen;
