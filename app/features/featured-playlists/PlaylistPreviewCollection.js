import React from "react";
import { Dimensions, FlatList } from "react-native";
import PropTypes from "prop-types";
import PlaylistPreview from "./PlaylistPreview";
import { Playlist, spaceScale } from "../../core";

const PlaylistPreviewCollection = ({ playlists, numColumns = 2, ...props }) => {
  const marginBetweenPreviews = spaceScale[1];
  const window = Dimensions.get("window");
  const previewSize = Math.floor(window.width / numColumns) - 2 * marginBetweenPreviews;
  const style = {
    margin: marginBetweenPreviews
  };

  return (
    <FlatList
      data={playlists}
      renderItem={({ item }) => (
        <PlaylistPreview playlist={item}
                         width={previewSize}
                         height={previewSize}
                         style={style}/>
      )}
      numColumns={numColumns}
      keyExtractor={(playlist) => playlist.id}
      {...props}
    />
  );
};

PlaylistPreviewCollection.propTypes = {
  playlists: PropTypes.arrayOf(Playlist).isRequired,
  ...FlatList.propTypes
};

export default PlaylistPreviewCollection;
