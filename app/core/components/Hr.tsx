import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { withAppTheme, WithAppThemeProps } from '../theme/AppTheme';

interface HrProps {
  style?: StyleProp<ViewStyle>;
}

const Hr = ({ theme, style }: HrProps & WithAppThemeProps) => {
  const hrStyle = {
    flex: 1,
    maxHeight: 3,
    backgroundColor: theme.colors.primary
  };
  return <View style={[hrStyle, style]} />;
};

export default withAppTheme(Hr);
