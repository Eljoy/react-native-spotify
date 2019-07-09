import PropTypes from "prop-types";

const image = PropTypes.shape({
  url: PropTypes.string.isRequired
});

const Playlist = PropTypes.shape({
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(image).isRequired,
  name: PropTypes.string.isRequired,
  tracks: PropTypes.shape({
    href: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  })
});

export default Playlist;
