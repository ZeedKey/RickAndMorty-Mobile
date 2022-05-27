import {theme} from '@theme';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ArrowIcon = ({
  width = 6,
  height = 8,
  color = theme.colors.basic.gray,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M5.936 4.115 1.199 7.641l-.342-.42 2.618-3.106L.857.58 1.2.297l4.737 3.818Z"
        fill={color}
      />
    </Svg>
  );
};
