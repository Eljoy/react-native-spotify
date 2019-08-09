import React, { ReactNode } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { typeScale } from '../../styles/Styles';
import { useAppTheme } from '../..';

export interface AppTextProps extends TextProps {
  size?: number;
  children: ReactNode;
}

const AppText = ({ style, size = 0, ...props }: AppTextProps & TextProps) => {
  const theme = useAppTheme();
  const AppTextStyle: TextStyle = {
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
    fontSize: typeScale[size]
  };
  return <Text {...props} style={[AppTextStyle, style]} />;
};

export default AppText;
