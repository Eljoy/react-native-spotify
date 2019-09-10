import React from 'react';
import { useAppTheme } from '../../theme';
import { BlockProps } from './Block';
import { Block } from './index';

function AppBackground({ style, children, ...props }: BlockProps) {
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
}

export default React.memo(AppBackground);
