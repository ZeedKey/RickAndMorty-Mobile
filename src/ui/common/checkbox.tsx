import CheckBox from '@react-native-community/checkbox'
import { accent } from '@theme'
import React from 'react'
import styled from 'styled-components/native'

export const Checkbox: React.FC<{ isActive?: boolean }> = ({ isActive }) => {
  return (
    <StyledCheckBox
    disabled={true}
      onFillColor={accent.indigo}
      tintColor={accent.indigo}
      onCheckColor="white"
      onTintColor={accent.indigo}
      value={isActive}
    />
  )
}

const StyledCheckBox = styled(CheckBox)`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`
