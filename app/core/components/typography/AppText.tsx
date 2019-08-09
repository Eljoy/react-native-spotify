import React, { ReactNode } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { typeScale } from '../../styles/Styles';
import { withAppTheme, WithAppThemeProps } from '../../theme/AppTheme';

export interface AppTextProps {
  size?: number;
  children: ReactNode;
}

const AppText = ({
  theme,
  style,
  size = 0,
  ...props
}: AppTextProps & TextProps & WithAppThemeProps) => {
  const AppTextStyle: TextStyle = {
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
    fontSize: typeScale[size]
  };
  return <Text {...props} style={[AppTextStyle, style]} />;
};

export default withAppTheme(AppText);
