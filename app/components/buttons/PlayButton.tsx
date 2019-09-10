import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAppTheme } from '../../theme';

interface PlayButtonProps {
  playing: boolean;

  onPress(): void;
}

export default function PlayButton({
  onPress,
  playing = false
}: PlayButtonProps) {
  const theme = useAppTheme();
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
}
