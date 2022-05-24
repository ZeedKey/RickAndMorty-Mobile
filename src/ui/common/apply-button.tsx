import React from 'react';
import styled from 'styled-components/native';

interface IApplyButtonProps {
  onPress: any;
}

export const ApplyButton: React.FC<IApplyButtonProps> = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <Label>APPLY</Label>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  border-radius: 14px;
  padding: 5px 12px;
  background-color: ${props => props.theme.colors.accent.indigo};
  width: 70px;
  flex-grow: 0;
`;
const Label = styled.Text`
  color: ${props => props.theme.colors.basic.white};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.sizes.s13}px;
  line-height: 18px;
  letter-spacing: ${props => props.theme.letterspacing.l7}px;
  text-align: center;
`;
