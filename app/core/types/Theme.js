import PropTypes from "prop-types";

const colorType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const colorsType = PropTypes.shape({
  primary: colorType,
  accent: colorType,
  background: colorType,
  text: colorType
});

const Theme = PropTypes.shape({
  roundness: PropTypes.number,
  colors: colorsType,
  fontFamily: PropTypes.string
});

export default Theme;
