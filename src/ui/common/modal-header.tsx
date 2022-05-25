import React from 'react';
import styled from 'styled-components/native';
import {ApplyButton} from './apply-button';
import {ClearButton} from '@ui/common';
import {Body3} from '@theme';

interface IFilterHeaderProps {
  onApply?: () => void;
  onClear?: () => void;
}

export const ModalHeader: React.FC<IFilterHeaderProps> = ({
  onApply,
  onClear,
}) => {
  return (
    <Box>
      <ClearButton onPress={onClear} />
      <Title>Filter</Title>
      <ApplyButton onPress={onApply} />
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
