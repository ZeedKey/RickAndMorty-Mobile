import { GetLocationByIdQuery } from 'src/schemas/generated'
import { basic, font, lt_space, sizes } from '@theme'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

interface IHeaderProps {
  data?: GetLocationByIdQuery
}

export const LocationHeader: React.FC<IHeaderProps> = ({ data }) => {
  return (
    <View>
      <Box>
        <Type>{data?.location.type}</Type>
        <Name>{data?.location.name}</Name>
        <Dimension>{data?.location.dimension}</Dimension>
      </Box>
      <Title>Residents</Title>
    </View>
  )
}

const Box = styled.View`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${basic.light_gray};
`
const Type = styled.Text`
  font-family: ${font.regular};
  font-size: ${sizes.s13}px;
  letter-spacing: ${lt_space.l7}px;
`
const Name = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s28}px;
  letter-spacing: ${lt_space.l34}px;
  line-height: 41px;
`
const Dimension = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s13}px;
  letter-spacing: ${lt_space.l8}px;
  color: ${basic.additional_text};
  text-transform: uppercase;
`
const Title = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s22}px;
  letter-spacing: ${lt_space.l34}px;
  line-height: 41px;
  margin-bottom: -25px;
  color: ${basic.additional_text};
  margin-left: 19px;
`
