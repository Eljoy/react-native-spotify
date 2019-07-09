import React, { PureComponent } from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import PropTypes from "prop-types";
import { Block, Playlist } from "../../core";

class PlaylistPreview extends PureComponent {
  render() {
    const { playlist, style, width, height } = this.props;
    const { url } = playlist.images[0];

    return (
      <Block style={style}>
        <TouchableWithoutFeedback>
          <Image source={{ uri: url }} style={{ width, height }}/>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

PlaylistPreview.propTypes = {
  playlist: Playlist.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};
PlaylistPreview.defaultProps = {
  style: {}
};

export default PlaylistPreview;
