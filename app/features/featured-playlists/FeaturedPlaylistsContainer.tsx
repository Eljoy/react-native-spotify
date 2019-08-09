import React, { Component } from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';
import FeaturedPlaylists from './FeaturedPlaylists';
import { withApi, SplashScreen } from '../../core';
import { WithApiProps } from '../../core/services/ApiProvider';
import Spotify from '../../core/types/Spotify';

interface FeaturedPlaylistsContainerProps extends WithApiProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface FeaturedPlaylistsContainerState {
  playlists: Spotify.Playlist[];
}

class FeaturedPlaylistsContainer extends Component<
  FeaturedPlaylistsContainerProps,
  FeaturedPlaylistsContainerState
> {
  state = {
    playlists: []
  };

  fetchParams = {
    limit: 20,
    offset: 0,
    allFetched: false
  };

  componentDidMount() {
    this.loadFeaturedPlaylists();
  }

  loadFeaturedPlaylists = async () => {
    const { api } = this.props;
    const { fetchParams } = this;
    if (fetchParams.allFetched) {
      return;
    }
    const result = await api.getFeaturedPlaylists({
      limit: fetchParams.limit,
      offset: fetchParams.offset
    });
    fetchParams.offset += result.length;

    this.setState(prevState => {
      const playlists = [...prevState.playlists, ...result];
      const allFetched = result.length < fetchParams.limit;

      return { playlists, allFetched };
    });
  };

  openPlaylist = (playlist: Spotify.Playlist) => {
    const { navigation } = this.props;
    navigation.navigate('PlaylistDetails', { playlistId: playlist.id });
  };

  render() {
    const { playlists } = this.state;

    return (
      <SplashScreen visible={playlists.length === 0}>
        <FeaturedPlaylists
          headerText="Editor's Choice"
          playlists={playlists}
          onOpenPlaylist={this.openPlaylist}
        />
      </SplashScreen>
    );
  }
}

export default withApi(FeaturedPlaylistsContainer);
