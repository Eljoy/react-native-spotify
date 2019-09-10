import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { spaceScale } from '../../styles';
import AppText, { AppTextProps } from './AppText';

function HeaderText({ style, children, ...props }: AppTextProps) {
  const headerStyle: StyleProp<TextStyle> = {
    margin: spaceScale[2],
    fontWeight: 'normal'
  };
  return (
    <AppText size={4} {...props} style={[headerStyle, style]}>
      {children}
    </AppText>
  );
}

export default HeaderText;
