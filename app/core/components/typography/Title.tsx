import React from 'react';
import AppText from './AppText';

const Title = ({ children, ...props }: any) => (
  <AppText size={2} {...props}>
    {children}
  </AppText>
);

export default Title;
