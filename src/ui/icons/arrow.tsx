import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const ArrowIcon = (props: SvgProps) => (
  <Svg
    width={6}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      d="M5.936 4.115 1.199 7.641l-.342-.42 2.618-3.106L.857.58 1.2.297l4.737 3.818Z"
      fill="#C7C7CC"
    />
  </Svg>
)