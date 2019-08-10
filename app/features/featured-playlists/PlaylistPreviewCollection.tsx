import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import PlaylistPreview from './PlaylistPreview';
import { spaceScale, Spotify } from '../../core';

interface PlaylistPreviewCollectionProps {
  playlists: Spotify.Playlist[];
  numColumns?: number;

  onOpenPlaylist(playlist: Spotify.Playlist): void;
  onEndReached(): void;
}

const PlaylistPreviewCollection = ({
  playlists,
  onOpenPlaylist,
  numColumns = 2,
  ...props
}: PlaylistPreviewCollectionProps) => {
  const marginBetweenPreviews = spaceScale[1];
  const window = Dimensions.get('window');
  const previewSize =
    Math.floor(window.width / numColumns) - 2 * marginBetweenPreviews;
  const style = {
    margin: marginBetweenPreviews
  };

  return (
    <FlatList
      data={playlists}
      renderItem={({ item }) => (
        <PlaylistPreview
          playlist={item}
          onPress={onOpenPlaylist}
          width={previewSize}
          height={previewSize}
          style={style}
        />
      )}
      numColumns={numColumns}
      keyExtractor={playlist => playlist.id}
      {...props}
    />
  );
};

export default PlaylistPreviewCollection;
