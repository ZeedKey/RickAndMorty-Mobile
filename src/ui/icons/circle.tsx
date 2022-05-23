import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CircleIcon = (props: SvgProps) => (
  <Svg width={12} height={13} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 12.722a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      fill="#5856D6"
    />
  </Svg>
);

export default CircleIcon;
