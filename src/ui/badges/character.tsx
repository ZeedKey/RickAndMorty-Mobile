import React from 'react';
import {Routes, useNavigation} from 'src/navigation/routes';
import * as schema from 'src/schemas/generated';
import {basic, font, graybase, sizes} from '@theme';
import styled from 'styled-components/native';

export const Character: React.FC<schema.Character> = props => {
  const navigation = useNavigation();
  const pushToDetails = () =>
    navigation.navigate(Routes.CharacterDetails, {
      character: {...props},
    });

  return (
    <Box onPress={pushToDetails}>
      <BadgeIcon source={{uri: props.image}} />

      <TextBox>
        <Status>{props.status}</Status>
        <Name>{props.name}</Name>
      </TextBox>
    </Box>
  );
};

const Box = styled.Pressable`
  border-width: 0.5px;
  border-radius: 8px;
  margin-right: 17px;
  width: 167px;
  border-color: ${graybase.gray_3};
`;
const TextBox = styled.View`
  padding: 12px;
`;
const Status = styled.Text`
  font-family: ${font.regular};
  font-size: ${sizes.s13}px;
  color: ${basic.additional_text};
`;
const Name = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s17}px;
  flex: 1;
`;
const BadgeIcon = styled.Image`
  height: 164px;
  width: 167px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
