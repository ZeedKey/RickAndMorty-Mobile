import React from 'react';
import styled from 'styled-components/native';
import {Checkbox} from '@ui/common';

export const Section: React.FC<{
  label: string;
  isChecked?: boolean;
  onPress: () => void;
}> = ({label, isChecked, onPress}) => {
  return (
    <StyledOption onPress={onPress}>
      <Checkbox isChecked={isChecked} />
      <TextBox>
        <Label>{label}</Label>
      </TextBox>
    </StyledOption>
  );
};

const StyledOption = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 10.5px 19px;
`;
const TextBox = styled.View`
  width: 100%;
`;
const Label = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 17px;
  line-height: 22px;
  letter-spacing: ${props => props.theme.letterspacing.l41}px;
`;
