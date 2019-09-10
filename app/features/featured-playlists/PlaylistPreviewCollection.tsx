import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import PlaylistPreview from './PlaylistPreview';
import Spotify from '../../types/Spotify';
import { spaceScale } from '../../styles';

interface PlaylistPreviewCollectionProps {
  playlists: Spotify.PlaylistPreview[];
  numColumns?: number;

  onOpenPlaylist(playlist: Spotify.PlaylistPreview): void;
  onEndReached(): void;
}

function PlaylistPreviewCollection({
  playlists,
  onOpenPlaylist,
  numColumns = 2,
  ...props
}: PlaylistPreviewCollectionProps) {
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
}

export default React.memo(PlaylistPreviewCollection);
