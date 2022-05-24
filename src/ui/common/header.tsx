import React from 'react';
import styled from 'styled-components/native';
import {accent, font, lt_space, sizes} from '@theme';
import CircleIcon from '../icons/circle';

interface IHeaderProps {
  title: string;
  callback: () => void;
  isFilterActive: boolean;
}

export const Header: React.FC<IHeaderProps> = ({
  title,
  callback,
  isFilterActive,
}) => {
  return (
    <Box>
      <Button onPress={callback}>
        {isFilterActive && <CircleIcon />}
        <Label>Filter</Label>
      </Button>
      <Name>{title}</Name>
    </Box>
  );
};

const Box = styled.SafeAreaView`
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
  margin-left: 5px;
`;
const Name = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s40}px;
  letter-spacing: ${lt_space.l41}px;
  line-height: 41px;
`;
const Button = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
