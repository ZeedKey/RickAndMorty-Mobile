import {Body2} from '@theme';
import React from 'react';
import styled from 'styled-components/native';
import {BackArrow} from '../icons/backarrow';

export const BackButton: React.FC<{onPress?: () => void}> = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <BackArrow />
      <Label>Back</Label>
    </Button>
  );
};

const Button = styled.Pressable`
  display: flex;
  flex-direction: row;
`;
const Label = styled(Body2)`
  font-family: ${props => props.theme.fonts.regular};
  letter-spacing: ${props => props.theme.letterspacing.l7}px;
  color: ${props => props.theme.colors.accent.indigo};
  margin-left: 5.5px;
`;
