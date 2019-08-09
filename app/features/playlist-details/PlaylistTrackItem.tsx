import React from 'react';
import { TouchableNativeFeedback, StyleSheet } from 'react-native';
import { Block, Spotify, PrimaryText, SecondaryText } from '../../core';

interface PlaylistTrackItemProps {
  track: Spotify.Track;

  onPress(track: Spotify.Track): void;
}

const PlaylistTrackItem = ({ track, onPress }: PlaylistTrackItemProps) => {
  const artistNames = track.artists.map(artist => artist.name).join(', ');
  const disabled = !track.preview_url;
  const playlistTrackItemStyle = [disabled && styles.disabled];
  return (
    <TouchableNativeFeedback onPress={() => onPress(track)} disabled={disabled}>
      <Block paddingScale={3} style={playlistTrackItemStyle}>
        <PrimaryText>{track.name}</PrimaryText>
        <SecondaryText>{artistNames}</SecondaryText>
      </Block>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.3
  }
});

export default PlaylistTrackItem;
