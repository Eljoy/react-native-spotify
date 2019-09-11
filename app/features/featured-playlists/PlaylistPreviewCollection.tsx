import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import PlaylistPreview from './PlaylistPreview';
import Spotify from '../../types/Spotify';
import { wp } from '../../components/layout';
import { useDeviceOrientation } from '../../hooks';

interface PlaylistPreviewCollectionProps {
  playlists: Spotify.PlaylistPreview[];
  numColumns?: number;

  onOpenPlaylist(playlistId: string): void;
  onEndReached(): void;
}

function PlaylistPreviewCollection({
  playlists,
  onOpenPlaylist,
  numColumns = 2,
  ...props
}: PlaylistPreviewCollectionProps) {
  const orientation = useDeviceOrientation();
  const { previewStyle, previewSize } = useMemo(
    () => ({
      previewSize: wp('48%'),
      previewStyle: {
        margin: wp('1%')
      }
    }),
    [orientation]
  );
  return (
    <FlatList
      data={playlists}
      key={orientation.portrait ? 'h' : 'v'}
      renderItem={({ item }) => (
        <PlaylistPreview
          playlistId={item.id}
          previewImage={item.images[0]}
          onPress={onOpenPlaylist}
          width={previewSize}
          height={previewSize}
          style={previewStyle}
        />
      )}
      alwaysBounceVertical
      numColumns={orientation.portrait ? numColumns : undefined}
      horizontal={orientation.landscape}
      keyExtractor={playlist => playlist.id}
      {...props}
    />
  );
}

export default React.memo(PlaylistPreviewCollection);
