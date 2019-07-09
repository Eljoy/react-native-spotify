import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Theme } from "../index";
import { withAppTheme } from "../theme/AppTheme";

const Hr = ({ theme, style }) => {
  const hrStyle = {
    flex: 1,
    maxHeight: 3,
    backgroundColor: theme.colors.primary,
    ...style
  };
  return (<View style={hrStyle}/>);
};

Hr.propTypes = {
  theme: Theme.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any
};

Hr.defaultProps = {
  style: {}
};

export default withAppTheme(Hr);
