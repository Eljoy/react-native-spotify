import React, { useMemo, useState } from 'react';
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
  const [previewSize, setPreviewSize] = useState(wp('48%'));
  const [margin, setMargin] = useState(wp('1%'));
  useMemo(() => {
    setPreviewSize(wp('48%'));
    setMargin(wp('1%'));
  }, [orientation]);

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
          style={{ margin }}
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
