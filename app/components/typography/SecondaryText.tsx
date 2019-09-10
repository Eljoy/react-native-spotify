import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import AppText, { AppTextProps } from './AppText';

function SecondaryText({ children, ...props }: AppTextProps) {
  const style: StyleProp<TextStyle> = {
    opacity: 0.65
  };
  return (
    <AppText size={1} style={style} {...props}>
      {children}
    </AppText>
  );
}

export default SecondaryText;
