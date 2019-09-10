import React from 'react';
import { TouchableNativeFeedback, Image } from 'react-native';
import Spotify from '../../types/Spotify';
import { Block } from '../../components/layout';

interface PlaylistPreviewProps {
  playlist: Spotify.PlaylistPreview;
  style?: any;
  height: number;
  width: number;

  onPress(playlist: Spotify.PlaylistPreview): void;
}

function PlaylistPreview({
  onPress,
  playlist,
  style,
  width,
  height
}: PlaylistPreviewProps) {
  const { url } = playlist.images[0];

  return (
    <TouchableNativeFeedback
      onPress={() => {
        onPress(playlist);
      }}
    >
      <Block style={style}>
        <Image source={{ uri: url }} style={{ width, height }} />
      </Block>
    </TouchableNativeFeedback>
  );
}

export default React.memo(PlaylistPreview);
