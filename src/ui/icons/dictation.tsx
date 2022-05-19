import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Dictation = (props: SvgProps) => (
  <Svg width={12} height={18} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 .364c1.657 0 3 1.22 3 2.727v6.364c0 1.506-1.343 2.727-3 2.727S3 10.96 3 9.455V3.09C3 1.585 4.343.364 6 .364Zm5.25 5.909c-.414 0-.75.305-.75.682v2.5c0 2.259-2.015 4.09-4.5 4.09s-4.5-1.831-4.5-4.09v-2.5c0-.377-.336-.682-.75-.682S0 6.578 0 6.955v2.5c.001 2.747 2.251 5.065 5.25 5.409v1.409h-2c-.414 0-.75.305-.75.682 0 .376.336.681.75.681h5.5c.414 0 .75-.305.75-.681 0-.377-.336-.682-.75-.682h-2v-1.41c2.999-.343 5.248-2.66 5.25-5.408v-2.5c0-.377-.336-.682-.75-.682Z"
      fill="#AEAEB2"
    />
  </Svg>
)

export default Dictation
