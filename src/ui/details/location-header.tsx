import {GetLocationByIdQuery} from 'src/schemas/generated';
import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Headline3, Tagline2, Headline2 as Name, Caption1} from '@theme';

interface IHeaderProps {
  data?: GetLocationByIdQuery;
}

export const LocationHeader: React.FC<IHeaderProps> = ({data}) => {
  return (
    <View>
      <Box>
        <Type>{data?.location.type}</Type>
        <Name>{data?.location.name}</Name>
        <Dimension>{data?.location.dimension}</Dimension>
      </Box>
      <Title>Residents</Title>
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
const Type = styled(Caption1)`
  letter-spacing: ${props => props.theme.letterspacing.l7}px;
`;
const Dimension = styled(Tagline2)`
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Title = styled(Headline3)`
  letter-spacing: ${props => props.theme.letterspacing.l34}px;
  color: ${props => props.theme.colors.basic.additional_text};
  margin-left: 19px;
`;
