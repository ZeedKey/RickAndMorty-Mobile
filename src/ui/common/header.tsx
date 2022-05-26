import {Headline1 as Name, Headline3} from '@theme';
import React from 'react';
import styled from 'styled-components/native';
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

const Box = styled.View`
  margin-left: 17px;
  margin-right: 17px;
  padding-bottom: 10px;
`;

const Label = styled(Headline3)`
  text-align: right;
  color: ${props => props.theme.colors.accent.indigo};
  letter-spacing: ${props => props.theme.letterspacing.l34}px;
  margin-left: 5px;
`;
const Button = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
