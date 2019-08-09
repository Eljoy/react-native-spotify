import React from 'react';
import Block, { BlockProps } from './Block';
import { useAppTheme } from '../..';

const AppBackground = ({ style, children, ...props }: BlockProps) => {
  const theme = useAppTheme();
  const appBackgroundStyle = {
    flex: 1,
    backgroundColor: theme.colors.background
  };
  return (
    <Block style={[appBackgroundStyle, style]} {...props}>
      {children}
    </Block>
  );
};

export default AppBackground;
