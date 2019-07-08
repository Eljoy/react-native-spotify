import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Theme from "../../types/Theme";
import { typeScale } from "../../styles/Styles";
import { withAppTheme } from "../../theme/AppTheme";

const AppText = ({
                   theme,
                   style,
                   size = 0,
                   ...props
                 }) => {

  const AppTextStyle = {
    ...style,
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
    fontSize: typeScale[size]
  };

  return <Text {...props} style={[AppTextStyle, style]}/>;
};

AppText.propTypes = {
  theme: Theme.isRequired,
  style: Text.propTypes.style,
  size: PropTypes.number.isRequired
};

AppText.defaultProps = {
  style: {}
};

export default withAppTheme(AppText);
