import React from 'react';
import styled from 'styled-components/native';
import {ApplyButton} from './apply-button';

interface IFilterHeaderProps {
  title: string;
  onPress?: () => void;
}

export const ModalHeader: React.FC<IFilterHeaderProps> = ({title, onPress}) => {
  return (
    <Box>
      <Title>{title}</Title>
      <ApplyButton onPress={onPress} />
    </Box>
  );
};

const Box = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const Title = styled.Text`
  flex-grow: 1;
  text-align: center;
`;
