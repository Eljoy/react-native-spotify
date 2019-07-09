import React from "react";
import { TouchableNativeFeedback, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { TrackType } from "../../core/types/PlaylistDetailsType";
import { Block, PrimaryText, SecondaryText } from "../../core";

const PlaylistTrackItem = ({ track, onPress }) => {
  const artistNames = track.artists.map((artist) => artist.name).join(", ");
  const disabled = !track.preview_url;
  const playlistTrackItemStyle = [
    disabled && styles.disabled
  ];

  return (
    <TouchableNativeFeedback onPress={() => onPress(track)} disabled={disabled}>
      <Block paddingScale={3} style={playlistTrackItemStyle}>
        <PrimaryText>{track.name}</PrimaryText>
        <SecondaryText>{artistNames}</SecondaryText>
      </Block>
    </TouchableNativeFeedback>
  );
};

PlaylistTrackItem.propTypes = {
  track: TrackType.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  disabled: {
    opacity: .3
  }
});

export default PlaylistTrackItem;
