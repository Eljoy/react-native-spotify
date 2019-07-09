import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableNativeFeedback } from "react-native";
import Theme from "../../types/Theme";
import { withAppTheme } from "../../theme/AppTheme";

const PlayButton = ({
                      theme,
                      playing,
                      onPress
                    }) => {

  const iconStyle = {
    fontSize: 36,
    color: theme.colors.accent
  };
  const iconName = playing ? "pause-circle-outline" : "play-circle-outline";

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Icon name={iconName} style={iconStyle}/>
    </TouchableNativeFeedback>
  );
};

PlayButton.propTypes = {
  theme: Theme.isRequired,
  onPress: PropTypes.func.isRequired,
  playing: PropTypes.bool
};

PlayButton.defaultProps = {
  playing: false
};

export default withAppTheme(PlayButton);
