import React, { useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import Spotify from '../../types/Spotify';
import useFeaturedPlaylists from './useFeaturedPlaylists';
import SplashScreen from '../../components/SplashScreen';
import { Block } from '../../components/layout';
import { HeaderText } from '../../components/typography';
import PlaylistPreviewCollection from './PlaylistPreviewCollection';
import AppBackground from '../../components/layout/AppBackground';

function FeaturedPlaylistsScreen() {
  const { navigate } = useNavigation();
  const { playlists, doFetch } = useFeaturedPlaylists();
  useEffect(() => {
    doFetch();
  }, []);

  const openPlaylist = (playlist: Spotify.PlaylistPreview) => {
    navigate('PlaylistDetails', { playlistId: playlist.id });
  };

  return (
    <SplashScreen visible={playlists.length === 0}>
      <AppBackground paddingScale={2}>
        <Block paddingVerticalScale={2}>
          <HeaderText>Editor's Choice</HeaderText>
        </Block>
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
