import React from 'react';
import styled from 'styled-components/native';
import {BackButton} from '@ui/common';
import {Body3} from '@theme';
import {RouteProp, useRoute} from '@react-navigation/native';

interface IDetailsHeaderProps {
  onPress: () => void;
}

export const DetailsHeader: React.FC<IDetailsHeaderProps> = ({onPress}) => {
  const {
    params,
  }: RouteProp<{params: {params: {id: string; name: string}}}, 'params'> =
    useRoute();

  return (
    <Box>
      <BackButton onPress={onPress} />
      <Title numberOfLines={1}>{params.params.name}</Title>
      <Block />
    </Box>
  );
};

const Box = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.basic.white};
`;
const Block = styled.View`
  width: 85px;
`;
const Title = styled(Body3)`
  flex: 1;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: ${props => props.theme.letterspacing.l24}px;
`;
