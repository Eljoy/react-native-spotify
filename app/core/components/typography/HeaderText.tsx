import React, { ReactNode } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import { AppText, spaceScale } from '../..';

interface HeaderTextProps extends TextProps {
  children: ReactNode;
}

const HeaderText = ({ style, children, ...props }: HeaderTextProps) => {
  const headerStyle: StyleProp<TextStyle> = {
    margin: spaceScale[2],
    fontWeight: 'normal'
  };
  return (
    <AppText size={4} {...props} style={[headerStyle, style]}>
      {children}
    </AppText>
  );
};

export default HeaderText;
