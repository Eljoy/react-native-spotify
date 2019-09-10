import React from 'react';
import { Block } from '../../components/layout';
import { PrimaryText, SecondaryText } from '../../components/typography';
import { usePlayer } from './index';
import { useAppTheme } from '../../theme';
import { PlayButton } from '../../components/buttons';

interface MiniPlayerProps {
  visible: boolean;
}

function MiniPlayer({ visible = false }: MiniPlayerProps) {
  const theme = useAppTheme();
  const miniPlayerStyle = {
    borderTopWidth: 2,
    borderTopColor: theme.colors.primary
  };
  const { playerState, playCurrentTrack, pause } = usePlayer();

  if (!playerState.currentTrack || !visible) {
    return null;
  }
  const artistNames = playerState.currentTrack.artists
    .map(artist => artist.name)
    .join(', ');

  return (
    <Block
      layout="row"
      layoutAlign="space-between center"
      paddingScale={3}
      style={miniPlayerStyle}
    >
      <Block>
        <PrimaryText>{playerState.currentTrack.name}</PrimaryText>
        <SecondaryText>{artistNames}</SecondaryText>
      </Block>
      <PlayButton
        onPress={() => (playerState.isPlaying ? pause() : playCurrentTrack())}
        playing={playerState.isPlaying}
      />
    </Block>
  );
}

export default React.memo(MiniPlayer);
