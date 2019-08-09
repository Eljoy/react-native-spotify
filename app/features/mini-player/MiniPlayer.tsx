import React from 'react';
import {
  Block,
  PlayButton,
  PrimaryText,
  SecondaryText,
  Spotify,
  useAppTheme
} from '../../core';

interface MiniPlayerProps {
  track: Spotify.Track;
  playing?: boolean;
  visible?: boolean;

  togglePlay(track: Spotify.Track): void;
}

const MiniPlayer = ({
  track,
  togglePlay,
  playing = false,
  visible = false
}: MiniPlayerProps) => {
  const theme = useAppTheme();
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

export default MiniPlayer;
