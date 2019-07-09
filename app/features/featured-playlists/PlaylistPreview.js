import React, { PureComponent } from "react";
import { TouchableNativeFeedback, Image } from "react-native";
import PropTypes from "prop-types";
import { Block, Playlist } from "../../core";

class PlaylistPreview extends PureComponent {
  render() {
    const {
      onPress,
      playlist,
      style,
      width,
      height
    } = this.props;
    const { url } = playlist.images[0];

    return (
      <TouchableNativeFeedback onPress={() => {onPress(playlist)}}>
        <Block style={style}>
          <Image source={{ uri: url }} style={{ width, height }}/>
        </Block>
      </TouchableNativeFeedback>
    );
  }
}

PlaylistPreview.propTypes = {
  playlist: Playlist.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
};
PlaylistPreview.defaultProps = {
  style: {}
};

export default PlaylistPreview;
