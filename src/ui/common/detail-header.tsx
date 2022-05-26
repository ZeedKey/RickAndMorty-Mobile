import React from 'react';
import styled from 'styled-components/native';
import {BackButton} from '@ui/common';
import {Body3} from '@theme';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IDetailsHeaderProps {
  title: string;
  onPress: () => void;
}

export const DetailsHeader: React.FC<IDetailsHeaderProps> = ({
  title,
  onPress,
}) => {
  return (
    <Box>
      <BackButton onPress={onPress} />
      <Title numberOfLines={1}>{title}</Title>
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
