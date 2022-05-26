import {Body2, Caption1} from '@theme';
import React from 'react';
import {Routes, useNavigation} from 'src/navigation/routes';
import * as schema from 'src/schemas/generated';
import styled from 'styled-components/native';

export const Location: React.FC<schema.Location> = ({type, id, name}) => {
  const {navigate} = useNavigation();
  const pushToDetails = () =>
    navigate(Routes.LocationStack, {
      screen: Routes.LocationDetails,
      params: {id, name},
    });

  return (
    <Box onPress={pushToDetails}>
      <Type>{type}</Type>
      <Name>{name}</Name>
    </Box>
  );
};

const Box = styled.Pressable`
  border-width: 0.5px;
  border-color: ${props => props.theme.colors.graybase.gray_3};
  border-radius: 8px;
  margin-right: 19px;
  width: 167px;
  height: 80px;
  padding: 12px;
`;
const Type = styled(Caption1)`
  letter-spacing: ${props => props.theme.letterspacing.l7}px;
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Name = styled(Body2)`
  letter-spacing: ${props => props.theme.letterspacing.l41}px;
  flex: 1;
`;
