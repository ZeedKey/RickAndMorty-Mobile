import { basic, font, graybase, sizes } from '@theme'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Routes, useNavigation } from 'src/navigation/routes'
import * as schema from 'src/schemas/generated'
import { lt_space } from 'src/theme/letterspacing'
import styled from 'styled-components/native'

export const Episode: React.FC<schema.Episode> = props => {
  const navigation = useNavigation()
  const pushToDetails = () =>
    navigation.navigate(Routes.EpisodeDetailsScreen, { episode: { ...props } })
  return (
    <Box onPress={pushToDetails}>
      <Episodes>{props?.episode}</Episodes>
      <Name>{props?.name}</Name>
      <Airdate>{props?.air_date}</Airdate>
    </Box>
  )
}

const Box = styled.Pressable`
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  border-bottom-width: 1px;
  border-bottom-color: ${graybase.gray_5};
  display: flex;
  margin-left: 19px;
`
const Episodes = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s17}px;
  letter-spacing: ${lt_space.l41}px;
`
const Name = styled.Text`
  font-family: ${font.regular};
  font-size: ${sizes.s15}px;
  letter-spacing: ${lt_space.l24}px;
`
const Airdate = styled.Text`
  margin-top: 5px;
  font-family: ${font.bold};
  font-size: ${sizes.s13}px;
  letter-spacing: ${lt_space.l7}px;
  color: ${basic.additional_text};
  text-transform: uppercase;
`
