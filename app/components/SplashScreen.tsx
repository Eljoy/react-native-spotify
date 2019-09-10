import React from 'react';
import { Dimensions, Image, ViewProps } from 'react-native';
// @ts-ignore
import splash from '../assets/images/splash.png';

interface SplashScreenProps extends ViewProps {
  visible?: boolean;
  children?: any;
}

function SplashScreen({ visible, children }: SplashScreenProps) {
  const { width, height } = Dimensions.get('window');
  const splashImage = <Image style={{ width, height }} source={splash} />;

  return visible ? splashImage : children;
}

export default React.memo(SplashScreen);
