import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import {
  getMargin,
  getMarginHorizontal,
  getMarginVertical,
  getPadding,
  getPaddingHorizontal, getPaddingVertical,
  spaceScale
} from "../../styles/Spaces";
import Layout, { layoutOptions } from "./Layout";

const Block = ({
                 flex,
                 height,
                 width,
                 layout,
                 layoutAlign,
                 marginScale,
                 marginHorizontalScale,
                 marginVerticalScale,
                 paddingScale,
                 paddingHorizontalScale,
                 paddingVerticalScale,
                 style,
                 children,
                 ...props
               }) => {

  const blockStyle = [
    flex && { flex },
    layout && Layout.toLayoutStyle(layout),
    layoutAlign && Layout.toLayoutAlignStyle(layoutAlign),
    height && { height },
    width && { width },
    marginScale && getMargin(marginScale),
    marginHorizontalScale && getMarginHorizontal(marginHorizontalScale),
    marginVerticalScale && getMarginVertical(marginVerticalScale),
    paddingScale && getPadding(paddingScale),
    paddingHorizontalScale && getPaddingHorizontal(paddingHorizontalScale),
    paddingVerticalScale && getPaddingVertical(paddingVerticalScale),
    style
  ];

  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>);
};

Block.propTypes = {
  ...View.propTypes,
  layout: PropTypes.oneOf(layoutOptions),
  layoutAlign: PropTypes.string,
  marginScale: PropTypes.oneOf(spaceScale.keys()),
  marginHorizontalScale: PropTypes.oneOf(spaceScale.keys()),
  marginVerticalScale: PropTypes.oneOf(spaceScale.keys()),
  paddingScale: PropTypes.oneOf(spaceScale.keys()),
  paddingHorizontalScale: PropTypes.oneOf(spaceScale.keys()),
  paddingVerticalScale: PropTypes.oneOf(spaceScale.keys())
};

Block.defaultProps = {
  layout: null,
  layoutAlign: null,
  marginScale: null,
  marginHorizontalScale: null,
  marginVerticalScale: null,
  paddingScale: null,
  paddingHorizontalScale: null,
  paddingVerticalScale: null
};

export default Block;
