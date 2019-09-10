import React from 'react';
import { StatusBar } from 'react-native';
import { useAppTheme } from '../theme';

function AppStatusBar() {
  const theme = useAppTheme();

  return <StatusBar backgroundColor={theme.colors.background} />;
}

export default AppStatusBar;
