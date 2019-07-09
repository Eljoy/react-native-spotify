import React from "react";
import { AppBackground, Hr, PlaylistDetailsType } from "../../core";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistTracks from "./PlaylistTracks";

const PlaylistDetails = ({ playlistDetails }) => {
  return (
    <AppBackground>
      <PlaylistDescription playlistDetails={playlistDetails}/>
      <Hr/>
      <PlaylistTracks tracks={playlistDetails.tracks.items}/>
    </AppBackground>
  );
};

PlaylistDetails.propTypes = {
  playlistDetails: PlaylistDetailsType.isRequired
};

export default PlaylistDetails;
