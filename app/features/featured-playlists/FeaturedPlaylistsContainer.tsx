import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import FeaturedPlaylists from './FeaturedPlaylists';
import { SplashScreen } from '../../core';
import Spotify from '../../core/types/Spotify';
import useFeaturedPlaylists from './UseFeaturedPlaylists';

function FeaturedPlaylistsContainer() {
  const { navigate } = useNavigation();
  const { playlists, fetchMore } = useFeaturedPlaylists();
  const openPlaylist = (playlist: Spotify.Playlist) => {
    navigate('PlaylistDetails', { playlistId: playlist.id });
  };

  return (
    <SplashScreen visible={playlists.length === 0}>
      <FeaturedPlaylists
        headerText="Editor's Choice"
        playlists={playlists}
        onEndReached={fetchMore}
        onOpenPlaylist={openPlaylist}
      />
    </SplashScreen>
  );
}

export default FeaturedPlaylistsContainer;
