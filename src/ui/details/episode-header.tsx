import {GetEpisodeByIdQuery} from 'src/schemas/generated';
import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

interface IHeaderProps {
  data?: GetEpisodeByIdQuery;
}

export const EpisodeHeader: React.FC<IHeaderProps> = ({data}) => {
  return (
    <View>
      <Box>
        <Airdate>{data?.episode.air_date}</Airdate>
        <Name>{data?.episode.name}</Name>
        <Episode>{data?.episode.episode}</Episode>
      </Box>
      <Title>Characters</Title>
    </View>
  );
};

const Box = styled.View`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.basic.light_gray};
`;
const Airdate = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.s13}px;
  letter-spacing: -${props => props.theme.letterspacing.l7}px;
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Name = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s28}px;
  letter-spacing: ${props => props.theme.letterspacing.l34}px;
  line-height: 41px;
`;
const Episode = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s13}px;
  letter-spacing: ${props => props.theme.letterspacing.l8}px;
  color: ${props => props.theme.colors.basic.additional_text};
  text-transform: uppercase;
`;
const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s22}px;
  letter-spacing: ${props => props.theme.letterspacing.l34}px;
  line-height: 41px;
  margin-bottom: -25px;
  color: ${props => props.theme.colors.basic.additional_text};
  margin-left: 19px;
`;
