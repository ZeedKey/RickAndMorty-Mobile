import React from 'react';
import {Routes, useNavigation} from 'src/navigation/routes';
import * as schema from 'src/schemas/generated';

import styled from 'styled-components/native';

export const Character: React.FC<schema.Character> = ({
  image,
  status,
  name,
  id,
}) => {
  const navigation = useNavigation();

  const pushToDetails = () =>
    navigation.navigate(Routes.CharacterDetails, {
      character: id,
    });

  return (
    <Box onPress={pushToDetails}>
      <BadgeIcon source={{uri: image}} />

      <TextBox>
        <Status>{status}</Status>
        <Name>{name}</Name>
      </TextBox>
    </Box>
  );
};

const Box = styled.Pressable`
  border-width: 0.5px;
  border-radius: 8px;
  margin-right: 17px;
  width: 167px;
  border-color: ${props => props.theme.colors.accent};
`;
const TextBox = styled.View`
  padding: 12px;
`;
const Status = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.s13}px;
  color: ${props => props.theme.colors.basic.additional_text};
`;
const Name = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s17};
  flex: 1;
`;
const BadgeIcon = styled.Image`
  height: 164px;
  width: 167px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
