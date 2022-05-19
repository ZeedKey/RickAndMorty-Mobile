import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const TvActive = (props: SvgProps) => (
  <Svg
    width={29}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      d="M24 8.167H5.332A2.333 2.333 0 0 0 3 10.5v12.833a2.333 2.333 0 0 0 2.333 2.334h18.666a2.333 2.333 0 0 0 2.334-2.334V10.5A2.333 2.333 0 0 0 24 8.167Z"
      fill="#5856D6"
    />
    <Path
      d="m20.5 2.333-5.834 5.834-5.833-5.834"
      stroke="#5856D6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const TvInactive = (props: SvgProps) => (
  <Svg
    width={29}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      d="M24 8.167H5.331A2.333 2.333 0 0 0 3 10.5v12.833a2.333 2.333 0 0 0 2.333 2.334H24a2.333 2.333 0 0 0 2.333-2.334V10.5A2.333 2.333 0 0 0 24 8.167ZM20.5 2.333l-5.834 5.834-5.834-5.834"
      stroke="#A3A3A3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
