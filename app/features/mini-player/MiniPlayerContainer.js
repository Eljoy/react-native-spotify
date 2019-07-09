import React, { Component } from "react";

import PropTypes from "prop-types";
import TrackPlayer from "react-native-track-player";
import MiniPlayer from "./MiniPlayer";
import { TrackType } from "../../core";

export default class MiniPlayerContainer extends Component {
  state = {
    playing: false
  };

  componentDidMount() {
    TrackPlayer.setupPlayer();
    TrackPlayer.registerPlaybackService(() => require("./PlayService"));
  }

  async componentWillReceiveProps(nextProps) {
    const { track } = this.props;

    if (!track || nextProps.track.id !== track.id) {
      await this.reset();
      await this.addTrack(nextProps.track);
      this.togglePlaying();
    }
  }

  togglePlaying = () => {
    this.setState((prevState) => {
      const playing = !prevState.playing;

      if (playing) {
        TrackPlayer.play();
      } else {
        TrackPlayer.pause();
      }

      return { playing };
    });
  };

  addTrack = async (track) => {
    return (
      TrackPlayer.add({ id: track.id, url: track.preview_url })
    );
  };

  reset = async () => {
    this.setState({ playing: false });
    await TrackPlayer.reset();
  };

  setTrack = async (prevTrack, track) => {
    await TrackPlayer.setupPlayer();
    if (prevTrack) {
      await TrackPlayer.remove(prevTrack.id);
    }
    await TrackPlayer.add({ id: track.id, url: track.preview_url });
  };

  render() {
    const { playing } = this.state;
    const { props } = this;
    const { visible } = this.props;

    if (!visible) {
      return null;
    }

    return (
      <MiniPlayer playing={playing} togglePlay={this.togglePlaying} {...props}/>
    );
  }
}

MiniPlayerContainer.propTypes = {
  track: TrackType,
  visible: PropTypes.bool
};

MiniPlayerContainer.defaultProps = {
  track: null,
  visible: false
};
