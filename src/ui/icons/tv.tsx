import {theme} from '@theme';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const TvIcon = ({
  width = 29,
  height = 28,
  color = theme.colors.accent.indigo,
}: SvgProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      d="M24 8.167H5.332A2.333 2.333 0 0 0 3 10.5v12.833a2.333 2.333 0 0 0 2.333 2.334h18.666a2.333 2.333 0 0 0 2.334-2.334V10.5A2.333 2.333 0 0 0 24 8.167Z"
      fill={color}
    />
    <Path
      d="m20.5 2.333-5.834 5.834-5.833-5.834"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
