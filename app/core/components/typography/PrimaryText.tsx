import React, { ReactNode } from 'react';
import { TextProps } from 'react-native';
import AppText from './AppText';

interface PrimaryTextProps extends TextProps {
  children: ReactNode;
}

const PrimaryText = ({ children, ...props }: PrimaryTextProps) => (
  <AppText size={1} {...props}>
    {children}
  </AppText>
);

export default PrimaryText;
