import React, { useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import useFeaturedPlaylists from './useFeaturedPlaylists';
import SplashScreen from '../../components/SplashScreen';
import PlaylistPreviewCollection from './PlaylistPreviewCollection';
import AppBackground from '../../components/layout/AppBackground';

function FeaturedPlaylistsScreen() {
  const { navigate } = useNavigation();
  const { playlists, doFetch } = useFeaturedPlaylists();
  useEffect(() => {
    doFetch();
  }, []);

  const openPlaylist = (playlistId: string) => {
    navigate('PlaylistDetails', { playlistId });
  };

  return (
    <SplashScreen visible={playlists.length === 0}>
      <AppBackground paddingScale={2}>
        <PlaylistPreviewCollection
          playlists={playlists}
          onOpenPlaylist={openPlaylist}
          onEndReached={() => {}}
        />
      </AppBackground>
    </SplashScreen>
  );
}

export default FeaturedPlaylistsScreen;
