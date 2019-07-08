import PropTypes from "prop-types";

const colorType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const Theme = PropTypes.shape({
  roundness: 1,
  colors: {
    primary: colorType,
    accent: colorType,
    background: colorType,
    text: colorType
  },
  fontFamily: PropTypes.string
});

export default Theme;
