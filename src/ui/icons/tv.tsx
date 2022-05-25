import {theme} from '@theme';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const TvIcon = ({
  width = 29,
  height = 28,
  color = theme.colors.accent.indigo,
}: SvgProps) => (
  <Svg width={width} height={height}>
    <Path
      d="M23.333 8.167H4.667A2.333 2.333 0 002.333 10.5v12.833a2.333 2.333 0 002.334 2.334h18.666a2.333 2.333 0 002.334-2.334V10.5a2.333 2.333 0 00-2.334-2.333z"
      stroke={color}
      fill={color !== theme.colors.accent.indigo ? 'white' : color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.833 2.333L14 8.167 8.167 2.333"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default TvIcon;
