import CheckBox from '@react-native-community/checkbox';
import {accent} from '@theme';
import React from 'react';
import styled from 'styled-components/native';

interface ICheckBoxProps {
  isChecked?: boolean;
}

export const Checkbox: React.FC<ICheckBoxProps> = ({isChecked}) => {
  return (
    <StyledCheckBox
      disabled={true}
      onFillColor={accent.indigo}
      tintColor={accent.indigo}
      onCheckColor="white"
      offAnimationType="fill"
      onTintColor={accent.indigo}
      value={isChecked}
    />
  );
};

const StyledCheckBox = styled(CheckBox)`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;
