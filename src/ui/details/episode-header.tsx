import {GetEpisodeByIdQuery} from 'src/schemas/generated';
import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Caption1, Headline2 as Name, Headline3, Tagline2} from '@theme';

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
const Airdate = styled(Caption1)`
  letter-spacing: -${props => props.theme.letterspacing.l7}px;
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Episode = styled(Tagline2)`
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Title = styled(Headline3)`
  letter-spacing: ${props => props.theme.letterspacing.l34}px;
  color: ${props => props.theme.colors.basic.additional_text};
  margin-left: 19px;
`;
