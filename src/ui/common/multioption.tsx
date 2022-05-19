import { basic, font, graybase, lt_space, sizes } from '@theme'
import React from 'react'
import styled from 'styled-components/native'

export const Multioption: React.FC<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <Box>
      <Title>{title}</Title>
      <OptionList>{children}</OptionList>
    </Box>
  )
}

const Box = styled.View`
  margin-bottom: 30px;
`
const OptionList = styled.View`
  display: flex;
  flex-direction: column;
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-top-color: ${graybase.gray_3};
  border-bottom-color: ${graybase.gray_3};
`
const Title = styled.Text`
  margin-left: 19px;
  margin-bottom: 8.5px;
  color: ${basic.additional_text};
  font-family: ${font.regular};
  font-size: ${sizes.s15};
  letter-spacing: -${lt_space.l7}px;
`
