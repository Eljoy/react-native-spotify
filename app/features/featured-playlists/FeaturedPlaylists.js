import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBackground from "../../core/components/layout/AppBackground";
import { Block, Header, Playlist } from "../../core";
import PlaylistPreviewCollection from "./PlaylistPreviewCollection";

class FeaturedPlaylists extends Component {
  componentDidMount() {
  }

  render() {
    const {
      headerText,
      playlists,
      onOpenPlaylist
    } = this.props;

    return (
      <AppBackground paddingScale={2}>
        <Block paddingVerticalScale={2}>
          <Header>{headerText}</Header>
        </Block>
        <PlaylistPreviewCollection playlists={playlists} onOpenPlaylist={onOpenPlaylist}/>
      </AppBackground>
    );
  }
}

FeaturedPlaylists.propTypes = {
  playlists: PropTypes.arrayOf(Playlist).isRequired,
  headerText: PropTypes.string.isRequired,
  onOpenPlaylist: PropTypes.func.isRequired
};

export default FeaturedPlaylists;
