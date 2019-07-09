import React, { Component } from "react";
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

  async componentDidMount() {
    const { api } = this.props;
    const { playlists } = await api.getFeaturedPlaylists(this.fetchParams);
    this.setState({ playlists: playlists.items });
  }

  //
  // loadFeaturedPlaylists = async () => {
  //   const { api } = this.props;
  //   const { limit, offset, allFetched } = this.fetchParams;
  //   if (allFetched) {
  //     return true;
  //   }
  //   const { playlists } = await api.getFeaturedPlaylists();
  //
  //   this.setState((prevState) => {
  //     const playlists = [...prevState.playlists, ...playlists.items]
  //   });
  // };

  render() {
    const { playlists } = this.state;

    return (
      <SplashScreen visible={playlists.length === 0}>
        <FeaturedPlaylists playlists={playlists}/>
      </SplashScreen>
    );
  }
}

FeaturedPlaylistsContainer.propTypes = {
  api: Api.isRequired
};

export default withApi(FeaturedPlaylistsContainer);
