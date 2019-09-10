import React from 'react';
import AppText, { AppTextProps } from './AppText';

function TitleText({ children, ...props }: AppTextProps) {
  return (
    <AppText size={2} {...props}>
      {children}
    </AppText>
  );
}

export default TitleText;
