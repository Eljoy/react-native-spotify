import React, { PureComponent } from 'react';
import TrackPlayer from 'react-native-track-player';
import MiniPlayer from './MiniPlayer';
import { Spotify } from '../../core';

interface MiniPlayerContainerProps {
  track?: Spotify.Track;
  visible: false;
}

interface MiniPlayerContainerState {
  playing: boolean;
}

export default class MiniPlayerContainer extends PureComponent<
  MiniPlayerContainerProps,
  MiniPlayerContainerState
> {
  state = {
    playing: false
  };

  componentDidMount() {
    TrackPlayer.setupPlayer();
  }

  async componentWillReceiveProps(nextProps: MiniPlayerContainerProps) {
    const { track } = this.props;

    if (nextProps.track && nextProps.track !== track) {
      await this.reset();
      await this.addTrack(nextProps.track);
      this.togglePlaying();
    }
  }

  componentWillUnmount() {
    this.reset();
  }

  togglePlaying = () => {
    this.setState((prevState: MiniPlayerContainerState) => {
      const playing = !prevState.playing;

      if (playing) {
        TrackPlayer.play();
      } else {
        TrackPlayer.pause();
      }

      return { playing };
    });
  };

  addTrack = async (track: Spotify.Track) => {
    return TrackPlayer.add({
      artist: '',
      duration: 0,
      title: '',
      id: track.id,
      url: track.preview_url
    });
  };

  reset = async () => {
    this.setState({ playing: false });
    await TrackPlayer.reset();
  };

  render() {
    const { playing } = this.state;
    const { visible, track } = this.props;

    if (!visible || !track) {
      return null;
    }

    return (
      <MiniPlayer
        playing={playing}
        visible={visible}
        togglePlay={this.togglePlaying}
        track={track}
      />
    );
  }
}
