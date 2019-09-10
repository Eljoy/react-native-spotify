import React, { ReactNode } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { typeScale } from '../../styles';
import { useAppTheme } from '../../theme';

export interface AppTextProps extends TextProps {
  size?: number;
  children: ReactNode;
}

function AppText({ style, size = 0, ...props }: AppTextProps) {
  const theme = useAppTheme();
  const appTextStyle: TextStyle = {
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
    fontSize: typeScale[size]
  };
  return <Text {...props} style={[appTextStyle, style]} />;
}

export default React.memo(AppText);
