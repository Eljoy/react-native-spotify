import TrackPlayer from 'react-native-track-player';
import Spotify from '../../types/Spotify';
import { PlayerHandler } from './types';

class TrackPlayerHandler implements PlayerHandler {
  timerId: number;

  onCurrentTimeChangedCallbacks: ((currentTimeSec: number) => void)[] = [];

  onPlaybackFinishedCallbacks: (() => void)[] = [];

  setup = async () => {
    await TrackPlayer.setupPlayer();

    const onUpdateCurrentPosition = async () => {
      const position = await TrackPlayer.getPosition();
      this.onCurrentTimeChangedCallbacks.forEach(callbackItem => {
        callbackItem(position);
      });
    };

    TrackPlayer.addEventListener('playback-state', ({ state }) => {
      if (state === TrackPlayer.STATE_PLAYING) {
        this.timerId = setInterval(onUpdateCurrentPosition, 1000);
      } else {
        clearInterval(this.timerId);
      }
    });

    TrackPlayer.addEventListener('playback-queue-ended', () => {
      this.onPlaybackFinishedCallbacks.forEach(callbackItem => callbackItem());
    });
  };

  destroy = async () => {
    clearInterval(this.timerId);
    return TrackPlayer.destroy();
  };

  setCurrentTrack = async (track: Spotify.Track) => {
    const artists = track.artists.map(artist => artist.name).join(', ');
    await TrackPlayer.add({
      artist: artists,
      duration: Math.floor(track.duration_ms / 1000),
      title: track.name,
      id: track.id,
      url: track.preview_url
    });
    return TrackPlayer.skip(track.id);
  };

  play = () => TrackPlayer.play();

  pause = () => TrackPlayer.pause();

  stop = () => TrackPlayer.stop();

  seekTo = (position: number) => TrackPlayer.seekTo(position);

  onPlaybackFinished(callback: () => void) {
    this.onPlaybackFinishedCallbacks.push(callback);
    return () => {
      const index = this.onPlaybackFinishedCallbacks.indexOf(callback);
      if (index !== -1) {
        this.onPlaybackFinishedCallbacks.splice(index);
      }
    };
  }

  onCurrentTimeChanged(callback: (currentTimeSec: number) => void) {
    this.onCurrentTimeChangedCallbacks.push(callback);
    return () => {
      const index = this.onCurrentTimeChangedCallbacks.indexOf(callback);
      if (index !== -1) {
        this.onCurrentTimeChangedCallbacks.splice(index);
      }
    };
  }
}

export default TrackPlayerHandler;
