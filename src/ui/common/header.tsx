import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useRoute} from '@react-navigation/native';
import {Routes, useNavigation} from 'src/navigation/routes';
import {accent, font, lt_space, sizes} from '@theme';
import {Pressable} from 'react-native';

interface IHeaderProps {
  title: string;
  callback: () => void;
}

export const Header: React.FC<IHeaderProps> = ({title, callback}) => {
  return (
    <Box>
      <Pressable onPress={callback}>
        <Label>Filter</Label>
      </Pressable>
      <Name>{title}</Name>
    </Box>
  );
};
const Box = styled.View`
  margin-left: 17px;
  margin-right: 17px;
  padding-bottom: 10px;
`;

const Label = styled.Text`
  text-align: right;
  color: ${accent.indigo};
  font-family: ${font.bold};
  font-size: ${sizes.s22}px;
  letter-spacing: ${lt_space.l34}px;
  line-height: 41px;
`;
const Name = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s40}px;
  letter-spacing: ${lt_space.l41}px;
  line-height: 41px;
`;
