import React from 'react';
import styled from 'styled-components/native';
import {ApplyButton} from './apply-button';
import {ClearButton} from '@ui/common';

interface IFilterHeaderProps {
  onPress?: () => void;
}

export const ModalHeader: React.FC<IFilterHeaderProps> = ({onPress}) => {
  return (
    <Box>
      <ClearButton onPress={() => 1} />
      <Title>Filter</Title>
      <ApplyButton onPress={onPress} />
    </Box>
  );
};

const Box = styled.View`
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const Title = styled.Text`
  flex-grow: 1;
  text-align: center;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s15}px;
  letter-spacing: ${props => props.theme.letterspacing.l24}px;
  text-align: center;
`;
