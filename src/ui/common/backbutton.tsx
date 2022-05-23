import {accent, font, lt_space, sizes} from '@theme';
import React from 'react';
import {useNavigation} from 'src/navigation/routes';
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
const Label = styled.Text`
  font-family: ${font.regular};
  font-size: ${sizes.s17}px;
  letter-spacing: -${lt_space.l7}px;
  color: ${accent.indigo};
  margin-left: 5.5px;
`;
