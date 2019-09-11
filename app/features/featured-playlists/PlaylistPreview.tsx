import React from 'react';
import { TouchableNativeFeedback, Image, ViewStyle } from 'react-native';
import Spotify from '../../types/Spotify';
import { Block } from '../../components/layout';

interface PlaylistPreviewProps {
  playlistId: string;
  previewImage: Spotify.Image;
  style?: ViewStyle;
  height: number;
  width: number;

  onPress(playlistId: string): void;
}

function PlaylistPreview({
  onPress,
  previewImage,
  playlistId,
  style,
  width,
  height
}: PlaylistPreviewProps) {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        onPress(playlistId);
      }}
    >
      <Block style={style}>
        <Image source={{ uri: previewImage.url }} style={{ width, height }} />
      </Block>
    </TouchableNativeFeedback>
  );
}

export default React.memo(PlaylistPreview);
