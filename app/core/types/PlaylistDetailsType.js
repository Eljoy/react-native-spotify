import PropTypes from "prop-types";

const Image = PropTypes.shape({
  url: PropTypes.string.isRequired
});

export const Artist = PropTypes.shape({
  name: PropTypes.string.isRequired
});

const TrackType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(Artist).isRequired,
  preview_url: PropTypes.string
});

const TrackItem = PropTypes.shape({
  track: TrackType
});

const Tracks = PropTypes.shape({
  items: PropTypes.arrayOf(TrackItem)
});

const Followers = PropTypes.shape({
  total: PropTypes.number.isRequired
});

const Owner = PropTypes.shape({
  display_name: PropTypes.string.isRequired
});

const PlaylistDetailsTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  owner: Owner.isRequired,
  images: PropTypes.arrayOf(Image),
  followers: Followers,
  tracks: Tracks
});

export { TrackType, TrackItem };
export default PlaylistDetailsTypes;
