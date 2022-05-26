import CheckBox from '@react-native-community/checkbox';
import {theme} from '@theme';
import React from 'react';
import styled from 'styled-components/native';

interface ICheckBoxProps {
  isChecked?: boolean;
}

export const Checkbox: React.FC<ICheckBoxProps> = ({isChecked}) => {
  return (
    <StyledCheckBox
      disabled={true}
      onFillColor={theme.colors.accent.indigo}
      tintColor={theme.colors.accent.indigo}
      onCheckColor="white"
      offAnimationType="fill"
      onTintColor={theme.colors.accent.indigo}
      value={isChecked}
      boxType='circle'
    />
  );
};

const StyledCheckBox = styled(CheckBox)`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;
