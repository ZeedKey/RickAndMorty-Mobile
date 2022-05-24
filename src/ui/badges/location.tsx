import {basic, font, graybase, sizes, lt_space} from '@theme';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Routes, useNavigation} from 'src/navigation/routes';
import * as schema from 'src/schemas/generated';
import styled from 'styled-components/native';

export const Location: React.FC<schema.Location> = props => {
  const navigation = useNavigation();
  const pushToDetails = () =>
    navigation.navigate(Routes.LocationDetails, {
      location: {...props},
    });
  return (
    <Box onPress={pushToDetails}>
      <Type>{props.type}</Type>
      <Name>{props.name}</Name>
    </Box>
  );
};

const Box = styled.Pressable`
  border-width: 0.5px;
  border-color: ${graybase.gray_3};
  border-radius: 8px;
  margin-right: 19px;
  width: 167px;
  height: 80px;
  padding: 12px;
`;
const Type = styled.Text`
  font-family: ${font.regular};
  font-size: ${sizes.s13}px;
  letter-spacing: ${lt_space.l7}px;
  color: ${basic.additional_text};
`;
const Name = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s17}px;
  letter-spacing: ${lt_space.l41}px;
  flex: 1;
`;
