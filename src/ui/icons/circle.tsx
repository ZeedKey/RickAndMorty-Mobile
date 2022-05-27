import {theme} from '@theme';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CircleIcon = ({
  width = 12,
  height = 13,
  color = theme.colors.accent.indigo,
}: SvgProps) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12.722a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        fill={color}
      />
    </Svg>
  );
};
