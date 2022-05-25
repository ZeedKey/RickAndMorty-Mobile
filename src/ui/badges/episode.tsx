import {Body3, Tagline2} from '@theme';
import React from 'react';
import {Routes, useNavigation} from 'src/navigation/routes';
import * as schema from 'src/schemas/generated';
import styled from 'styled-components/native';

export const Episode: React.FC<schema.Episode> = ({
  episode,
  name,
  air_date,
  id,
}) => {
  const navigation = useNavigation();
  const pushToDetails = () =>
    navigation.navigate(Routes.EpisodeDetails, {id});

  return (
    <Box onPress={pushToDetails}>
      <Episodes>{episode}</Episodes>
      <Name>{name}</Name>
      <Airdate>{air_date}</Airdate>
    </Box>
  );
};

const Box = styled.Pressable`
  padding-top: 6.5px;
  padding-bottom: 6.5px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.graybase.gray_5};
  display: flex;
  margin-left: 19px;
`;
const Episodes = styled(Body3)`
  letter-spacing: ${props => props.theme.letterspacing.l41}px;
`;
const Name = styled(Body3)`
  font-family: ${props => props.theme.fonts.regular};
  letter-spacing: ${props => props.theme.letterspacing.l24}px;
`;
const Airdate = styled(Tagline2)`
  margin-top: 5px;
  letter-spacing: ${props => props.theme.letterspacing.l7}px;
  color: ${props => props.theme.colors.basic.additional_text};
`;
