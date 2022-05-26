import React from 'react';
import styled from 'styled-components/native';
import {Checkbox} from '@ui/common';
import {Body2} from '@theme';

export const Section: React.FC<{
  label: string;
  isChecked?: boolean;
  last?: boolean;
  onPress: () => void;
}> = ({label, isChecked, onPress, last}) => {
  return (
    <StyledOption onPress={onPress}>
      <Checkbox isChecked={isChecked} />
      <TextBox isLast={last}>
        <Label>{label}</Label>
      </TextBox>
    </StyledOption>
  );
};

const StyledOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 0px 19px;
`;
const TextBox = styled.View<{isLast?: boolean}>`
  width: 100%;
  border-bottom-width: ${props => (props.isLast ? 0 : 0.5)}px;
  border-bottom-color: ${props => props.theme.colors.graybase.gray_3};
  padding-bottom: 10.5px;
  padding-top: 10.5px;
`;
const Label = styled(Body2)`
  font-family: ${props => props.theme.fonts.regular};
  letter-spacing: ${props => props.theme.letterspacing.l38}px;
`;
