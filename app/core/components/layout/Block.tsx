import React, { ReactNode } from 'react';
import { View } from 'react-native';
import {
  getMargin,
  getMarginHorizontal,
  getMarginVertical,
  getPadding,
  getPaddingHorizontal,
  getPaddingVertical
} from '../..';

import Layout from './Layout';

export interface BlockProps {
  flex?: number;
  height?: number;
  width?: number;
  layout?: string;
  layoutAlign?: string;
  marginScale?: number;
  marginHorizontalScale?: number;
  marginVerticalScale?: number;
  paddingScale?: number;
  paddingHorizontalScale?: number;
  paddingVerticalScale?: number;
  style?: any;
  children: ReactNode;
}

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
}: BlockProps) => {
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
    </View>
  );
};

export default Block;
