import React from 'react';
import Block, { BlockProps } from './Block';
import { withAppTheme, WithAppThemeProps } from '../../theme/AppTheme';

const AppBackground = ({
  style,
  theme,
  children,
  ...props
}: WithAppThemeProps & BlockProps) => {
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

export default withAppTheme(AppBackground);
