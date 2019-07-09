import React from "react";
import PropTypes from "prop-types";
import { TouchableNativeFeedback } from "react-native";
import { Artist } from "../../core/types/PlaylistDetailsType";
import { Block, PrimaryText, SecondaryText } from "../../core";

const PlaylistTrackItem = ({ name, artists }) => {
  const artistNames = artists.map((artist) => artist.name).join(", ");

  return (
    <TouchableNativeFeedback onPress={() => {
    }}>
      <Block paddingScale={2}>
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{artistNames}</SecondaryText>
      </Block>
    </TouchableNativeFeedback>
  );
};

PlaylistTrackItem.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(Artist).isRequired
};

export default PlaylistTrackItem;
