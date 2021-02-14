import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

const screen = Dimensions.get('screen');

type ScreenProps = {
  width: number
  height: number
}

export default function() {
  const isOrientationPortrait = ({ width, height }: ScreenProps) =>
    height >= width;
  const isOrientationLandscape = ({ width, height }: ScreenProps) =>
    width >= height;

  const [orientation, setOrientation] = useState({
    portrait: isOrientationPortrait(screen),
    landscape: isOrientationLandscape(screen)
  });

  // eslint-disable-next-line no-shadow
  const onChange = ({ screen }: { window: ScaledSize; screen: ScaledSize }) => {
    setOrientation({
      portrait: isOrientationPortrait(screen),
      landscape: isOrientationLandscape(screen)
    });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);

    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, [orientation.portrait, orientation.landscape]);

  return orientation;
}
