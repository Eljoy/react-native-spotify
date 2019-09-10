import React from 'react';
import AppText, { AppTextProps } from './AppText';

function PrimaryText({ children, ...props }: AppTextProps) {
  return (
    <AppText size={1} {...props}>
      {children}
    </AppText>
  );
}

export default PrimaryText;
