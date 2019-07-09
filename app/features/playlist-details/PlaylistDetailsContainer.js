import React, { Component } from "react";
import PropTypes from "prop-types";
import { Api, withApi } from "../../core";
import PlaylistDetails from "./PlaylistDetails";

const ID = "37i9dQZF1DWZd79rJ6a7lp";

class PlaylistDetailsContainer extends Component {
  state = {
    playlistDetails: null
  };

  async componentDidMount() {
    const { api, navigation } = this.props;
    const playlistId = navigation.getParam("playlistId");
    const playlistDetails = await api.getPlaylistDetails(playlistId);
    this.setState({ playlistDetails });
  }

  render() {
    const { playlistDetails } = this.state;
    if (playlistDetails === null) return null;
    return (
      <PlaylistDetails playlistDetails={playlistDetails}/>
    );
  }
}

PlaylistDetailsContainer.propTypes = {
  api: Api.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired
  }).isRequired
};

export default withApi(PlaylistDetailsContainer);
