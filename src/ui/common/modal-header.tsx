import React from 'react';
import styled from 'styled-components/native';
import {ApplyButton} from './apply-button';

interface IFilterHeaderProps {
  title: string;
}

export const ModalHeader: React.FC<IFilterHeaderProps> = ({title}) => {
  const onPress = () => 1;
  return (
    <Box>
      <Title>{title}</Title>
      <ApplyButton onPress={onPress} />
    </Box>
  );
};

const Box = styled.SafeAreaView`
display: flex;
align-items: center;
margin-bottom: 40px;
`;
const Title = styled.Text`
`;
