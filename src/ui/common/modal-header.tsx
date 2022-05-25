import React from 'react';
import styled from 'styled-components/native';
import {ApplyButton} from './apply-button';
import {ClearButton} from '@ui/common';
import {Body3} from '@theme';

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
const Title = styled(Body3)`
  flex-grow: 1;
  text-align: center;
  letter-spacing: ${props => props.theme.letterspacing.l24}px;
  text-align: center;
`;
