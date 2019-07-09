import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { TrackItem } from "../../core/types/PlaylistDetailsType";
import PlaylistTrackItem from "./PlaylistTrackItem";

const PlaylistTracks = ({ tracks, ...props }) => {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => (
        <PlaylistTrackItem artists={item.track.artists} name={item.track.name}/>
      )}
      keyExtractor={(item) => item.id}
      {...props}
    />
  );
};

PlaylistTracks.propTypes = {
  tracks: PropTypes.arrayOf(TrackItem).isRequired,
  ...FlatList.propTypes
};

export default PlaylistTracks;
