import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBackground from "../../core/components/layout/AppBackground";
import { Block, Header, Playlist } from "../../core";
import PlaylistPreviewCollection from "./PlaylistPreviewCollection";

class FeaturedPlaylists extends Component {
  componentDidMount() {
  }

  render() {
    const { playlists } = this.props;
    return (
      <AppBackground paddingScale={2}>
        <Block paddingVerticalScale={2}>
          <Header>Editor's Picks</Header>
        </Block>
        <PlaylistPreviewCollection playlists={playlists}/>
      </AppBackground>
    );
  }
}

FeaturedPlaylists.propTypes = {
  playlists: PropTypes.arrayOf(Playlist).isRequired
};

export default FeaturedPlaylists;
