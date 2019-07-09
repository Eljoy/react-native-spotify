import React from "react";
import PropTypes from "prop-types";
import { Block, PlayButton, PrimaryText, SecondaryText, Theme, TrackType } from "../../core";
import { withAppTheme } from "../../core/theme/AppTheme";

const MiniPlayer = ({
                      track,
                      togglePlay,
                      playing,
                      visible,
                      theme
                    }) => {
  const artistNames = track.artists.map((artist) => artist.name).join(", ");
  const miniPlayerStyle = {
    borderTopWidth: 2,
    borderTopColor: theme.colors.primary
  };

  if (!visible) {
    return null;
  }

  return (
    <Block layout="row" layoutAlign="space-between center" paddingScale={3} style={miniPlayerStyle}>
      <Block>
        <PrimaryText>{track.name}</PrimaryText>
        <SecondaryText>{artistNames}</SecondaryText>
      </Block>
      <PlayButton onPress={() => togglePlay(track)} playing={playing}/>
    </Block>
  );
};

MiniPlayer.propTypes = {
  track: TrackType.isRequired,
  theme: Theme.isRequired,
  visible: PropTypes.bool,
  playing: PropTypes.bool,
  togglePlay: PropTypes.func.isRequired
};

MiniPlayer.defaultProps = {
  visible: false,
  playing: false
};

export default withAppTheme(MiniPlayer);
