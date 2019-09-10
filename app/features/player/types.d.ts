import Spotify from '../../types/Spotify';

interface Unsubscribe {
  (): void;
}

export interface PlayerHandler {
  setup(): Promise<void>;
  destroy(): Promise<void>;
  setCurrentTrack(track: Spotify.Track): Promise<void>;
  play(track?: Spotify.Track): Promise<void>;
  pause(): Promise<void>;
  stop(): Promise<void>;
  seekTo(position: number): Promise<void>;
  onCurrentTimeChanged(callback: (currentTimeSec: number) => void): Unsubscribe;
  onPlaybackFinished(callback: () => void): Unsubscribe;
}
