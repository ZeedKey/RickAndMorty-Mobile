import {Body2} from '@theme';
import React from 'react';
import styled from 'styled-components/native';

interface IClearButtonProps {
  onPress: () => void;
}

export const ClearButton: React.FC<IClearButtonProps> = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <Label>Clear</Label>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  width: 70px;
`;
const Label = styled(Body2)`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.accent.indigo};
`;
