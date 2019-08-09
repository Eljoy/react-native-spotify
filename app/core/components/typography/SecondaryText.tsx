import React, { ReactNode } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import AppText from './AppText';

interface SecondaryTextProps extends TextProps {
  children: ReactNode;
}

const SecondaryText = ({ children, ...props }: SecondaryTextProps) => {
  const style: StyleProp<TextStyle> = {
    opacity: 0.65
  };
  return (
    <AppText size={1} style={style} {...props}>
      {children}
    </AppText>
  );
};

export default SecondaryText;
