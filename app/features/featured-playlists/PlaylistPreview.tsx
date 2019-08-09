import React, { PureComponent } from 'react';
import { TouchableNativeFeedback, Image } from 'react-native';
import { Block, Spotify } from '../../core';

interface PlaylistPreviewProps {
  playlist: Spotify.Playlist;
  style?: any;
  height: number;
  width: number;

  onPress(playlist: Spotify.Playlist): void;
}

class PlaylistPreview extends PureComponent<PlaylistPreviewProps> {
  render() {
    const { onPress, playlist, style, width, height } = this.props;
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
}

export default PlaylistPreview;
