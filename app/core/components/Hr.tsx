import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useAppTheme } from '..';

interface HrProps {
  style?: StyleProp<ViewStyle>;
}

const Hr = ({ style }: HrProps) => {
  const theme = useAppTheme();
  const hrStyle = {
    flex: 1,
    maxHeight: 3,
    backgroundColor: theme.colors.primary
  };
  return <View style={[hrStyle, style]} />;
};

export default Hr;
