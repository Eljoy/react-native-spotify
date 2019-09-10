import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useAppTheme } from '../theme';

interface HrProps {
  style?: StyleProp<ViewStyle>;
}

function Hr({ style }: HrProps) {
  const theme = useAppTheme();
  const hrStyle = {
    flex: 1,
    maxHeight: 3,
    backgroundColor: theme.colors.primary
  };
  return <View style={[hrStyle, style]} />;
}

export default React.memo(Hr);
