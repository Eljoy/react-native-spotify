import React, { Component } from "react";
import { Api, withApi } from "../../core";
import PlaylistDetails from "./PlaylistDetails";

const ID = "37i9dQZF1DWZd79rJ6a7lp";

class PlaylistDetailsContainer extends Component {
  state = {
    playlistDetails: null
  };

  async componentDidMount() {
    const { api } = this.props;
    const playlistDetails = await api.getPlaylistDetails(ID);
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
  api: Api.isRequired
};

export default withApi(PlaylistDetailsContainer);
