import React, { Component } from "react";
import PropTypes from "prop-types";
import FeaturedPlaylists from "./FeaturedPlaylists";
import { Api, withApi, SplashScreen } from "../../core";

class FeaturedPlaylistsContainer extends Component {
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
    const result = await api.getFeaturedPlaylists({ limit: fetchParams.limit, offset: fetchParams.offset });
    fetchParams.offset += result.playlists.items.length;

    this.setState((prevState) => {
      const playlists = [...prevState.playlists, ...result.playlists.items];
      const allFetched = result.playlists.items.length < fetchParams.limit;

      return { playlists, allFetched };
    });
  };

  openPlaylist = (playlist) => {
    const { navigation } = this.props;
    navigation.navigate("PlaylistDetails", { playlistId: playlist.id });
  };

  render() {
    const { playlists } = this.state;

    return (
      <SplashScreen visible={playlists.length === 0}>
        <FeaturedPlaylists
          headerText="Editor's Choice"
          playlists={playlists}
          onOpenPlaylist={this.openPlaylist}/>
      </SplashScreen>
    );
  }
}

FeaturedPlaylistsContainer.propTypes = {
  api: Api.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default withApi(FeaturedPlaylistsContainer);
