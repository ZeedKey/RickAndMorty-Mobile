import React from 'react';
import {Routes, useNavigation} from 'src/navigation/routes';
import * as schema from 'src/schemas/generated';
import styled from 'styled-components/native';

export const Location: React.FC<schema.Location> = ({type, id, name}) => {
  const navigation = useNavigation();

  const pushToDetails = () =>
    navigation.navigate(Routes.LocationDetails, {
      location: id,
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
const Type = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.s13}px;
  letter-spacing: ${props => props.theme.letterspacing.l7}px;
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Name = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s17}px;
  letter-spacing: ${props => props.theme.letterspacing.l41}px;
  flex: 1;
`;
