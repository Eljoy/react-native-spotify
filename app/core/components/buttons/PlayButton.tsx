import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withAppTheme, WithAppThemeProps } from '../../theme/AppTheme';

interface PlayButtonProps {
  playing: boolean;

  onPress(): void;
}

const PlayButton = ({
  theme,
  onPress,
  playing = false
}: PlayButtonProps & WithAppThemeProps) => {
  const iconStyle = {
    fontSize: 36,
    color: theme.colors.accent
  };
  const iconName = playing ? 'pause-circle-outline' : 'play-circle-outline';

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Icon name={iconName} style={iconStyle} />
    </TouchableNativeFeedback>
  );
};

export default withAppTheme(PlayButton);
