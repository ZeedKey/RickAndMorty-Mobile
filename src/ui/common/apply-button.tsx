import {accent, basic, font, lt_space, sizes} from '@theme';
import React from 'react';
import styled from 'styled-components/native';

export const ApplyButton: React.FC<{onPress: () => void}> = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <Label>APPLY</Label>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  border-radius: 14px;
  padding: 5px 12px;
  background-color: ${accent.indigo};
  width: 70px;
`;
const Label = styled.Text`
  color: ${basic.white};
  font-family: ${font.bold};
  font-size: ${sizes.s13};
  line-height: 18px;
  letter-spacing: ${lt_space.l7}px;
  text-align: center;
`;
