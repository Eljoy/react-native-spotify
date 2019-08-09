import React from 'react';
import {
  Block,
  PlayButton,
  PrimaryText,
  SecondaryText,
  Spotify
} from '../../core';
import { withAppTheme, WithAppThemeProps } from '../../core/theme/AppTheme';

interface MiniPlayerProps {
  track: Spotify.Track;
  playing?: boolean;
  visible?: boolean;

  togglePlay(track: Spotify.Track): void;
}

const MiniPlayer = ({
  track,
  theme,
  togglePlay,
  playing = false,
  visible = false
}: MiniPlayerProps & WithAppThemeProps) => {
  const artistNames = track.artists.map(artist => artist.name).join(', ');
  const miniPlayerStyle = {
    borderTopWidth: 2,
    borderTopColor: theme.colors.primary
  };

  if (!visible) {
    return null;
  }
  return (
    <Block
      layout="row"
      layoutAlign="space-between center"
      paddingScale={3}
      style={miniPlayerStyle}
    >
      <Block>
        <PrimaryText>{track.name}</PrimaryText>
        <SecondaryText>{artistNames}</SecondaryText>
      </Block>
      <PlayButton onPress={() => togglePlay(track)} playing={playing} />
    </Block>
  );
};

export default withAppTheme(MiniPlayer);
