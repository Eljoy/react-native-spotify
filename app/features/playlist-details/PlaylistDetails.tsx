import React from 'react';
import { AppBackground, Hr, Spotify } from '../../core';
import PlaylistDescription from './PlaylistDescription';
import PlaylistTracks from './PlaylistTracks';

interface PlaylistDetailsProps {
  playlistDetails: Spotify.PlaylistDetails;
}

const PlaylistDetails = ({ playlistDetails }: PlaylistDetailsProps) => {
  return (
    <AppBackground>
      <PlaylistDescription playlistDetails={playlistDetails} />
      <Hr />
      <PlaylistTracks tracks={playlistDetails.tracks.items} />
    </AppBackground>
  );
};

export default PlaylistDetails;
