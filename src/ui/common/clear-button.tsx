import {Body2} from '@theme';
import React from 'react';
import styled from 'styled-components/native';

interface IClearButtonProps {
  onPress?: () => void;
  isVisible?: boolean;
}

export const ClearButton: React.FC<IClearButtonProps> = ({
  onPress,
  isVisible,
}) => {
  return (
    <Button onPress={onPress}>
      <Label isVisible={isVisible}>Clear</Label>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  width: 70px;
`;
const Label = styled(Body2)<{isVisible?: boolean}>`
  opacity: ${({isVisible}) => (isVisible ? '100' : '0')};
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.accent.indigo};
`;
