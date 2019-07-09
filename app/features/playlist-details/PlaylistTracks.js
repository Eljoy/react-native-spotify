import React, { Component } from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { TrackItem } from "../../core/types/PlaylistDetailsType";
import PlaylistTrackItem from "./PlaylistTrackItem";
import { Block } from "../../core";
import MiniPlayerContainer from "../mini-player/MiniPlayerContainer";

class PlaylistTracks extends Component {
  state = {
    currentTrack: null
  };

  playTrack = (track) => {
    this.setState({ currentTrack: track });
  };

  render() {
    const { props } = this;
    const { tracks } = props;
    const { currentTrack } = this.state;

    return (
      <Block flex={1}>
        <FlatList
          data={tracks}
          renderItem={({ item }) => (
            <PlaylistTrackItem track={item.track} onPress={this.playTrack}/>
          )}
          keyExtractor={(item) => item.track.id}
          {...props}
        />
        <MiniPlayerContainer visible={!!currentTrack} track={currentTrack}/>
      </Block>
    );
  }
}

PlaylistTracks.propTypes = {
  tracks: PropTypes.arrayOf(TrackItem).isRequired,
  ...FlatList.propTypes
};

export default PlaylistTracks;
