import { GetEpisodeByIdQuery } from 'src/schemas/generated'
import { basic, font, graybase, lt_space, sizes } from '@theme'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

interface IHeaderProps {
  data?: GetEpisodeByIdQuery
}

export const EpisodeHeader: React.FC<IHeaderProps> = ({ data }) => {
  return (
    <View>
      <Box>
        <Airdate>{data?.episode.air_date}</Airdate>
        <Name>{data?.episode.name}</Name>
        <Episode>{data?.episode.episode}</Episode>
      </Box>
      <Title>Characters</Title>
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
const Airdate = styled.Text`
  font-family: ${font.regular};
  font-size: ${sizes.s13}px;
  letter-spacing: -${lt_space.l7}px;
  color: ${basic.additional_text};
`
const Name = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s28}px;
  letter-spacing: ${lt_space.l34}px;
  line-height: 41px;
`
const Episode = styled.Text`
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
