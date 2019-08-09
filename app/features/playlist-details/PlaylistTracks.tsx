import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import PlaylistTrackItem from './PlaylistTrackItem';
import { Spotify } from '../../core';
import MiniPlayerContainer from '../mini-player/MiniPlayerContainer';

interface PlaylistTracksProps {
  tracks: Spotify.TrackItem[];
}

class PlaylistTracks extends PureComponent<PlaylistTracksProps> {
  state = {
    currentTrack: undefined
  };

  playTrack = (track: Spotify.Track) => {
    this.setState({ currentTrack: track });
  };

  render() {
    const { tracks } = this.props;
    const { currentTrack } = this.state;

    return (
      <>
        <FlatList
          data={tracks}
          renderItem={({ item }) => (
            <PlaylistTrackItem track={item.track} onPress={this.playTrack} />
          )}
          keyExtractor={item => item.track.id}
        />
        <MiniPlayerContainer visible={!!currentTrack} track={currentTrack} />
      </>
    );
  }
}

export default PlaylistTracks;
