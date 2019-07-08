import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { getMargin, getPadding, spaceScale } from "../../styles/Spaces";
import Layout, { layoutOptions } from "./Layout";

const Block = ({
                 flex,
                 height,
                 width,
                 layout,
                 layoutAlign,
                 marginScale,
                 paddingScale,
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
    getMargin(marginScale),
    getPadding(paddingScale),
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
  marginScale: PropTypes.oneOf(spaceScale),
  paddingScale: PropTypes.oneOf(spaceScale)
};

Block.defaultProps = {
  layout: null,
  layoutAlign: null,
  marginScale: null,
  paddingScale: null
};

export default Block;
