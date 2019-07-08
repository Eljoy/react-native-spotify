import PropTypes from "prop-types";

const Theme = PropTypes.shape({
  roundness: 1,
  colors: {
    primary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    accent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },
  fontFamily: PropTypes.string
});

export default Theme;
