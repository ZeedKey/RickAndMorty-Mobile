import {basic, font, graybase, lt_space, sizes} from '@theme';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {ArrowIcon} from '../icons/arrow';
import {Checkbox} from '@ui/common';

interface IOptionProps {
  title: string;
  body: string;
  isActive?: boolean;
  onPress?: () => void;
}

export const Option: React.FC<IOptionProps> = ({
  title,
  body,
  onPress,
  isActive,
}) => {
  return (
    <Box onPress={onPress}>
      <TextView>
        <Checkbox isActive={isActive} />

        <View>
          <Title>{title}</Title>
          <Body>{body}</Body>
        </View>
      </TextView>
      <ArrowIcon />
    </Box>
  );
};

const Box = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  padding-right: 16px;
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  margin-bottom: 19px;

  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-top-color: ${graybase.gray_3};
  border-bottom-color: ${graybase.gray_3};
`;
const TextView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  font-family: ${font.bold};
  font-size: ${sizes.s17}px;
  letter-spacing: ${lt_space.l41}px;
  line-height: 22px;
`;
const Body = styled.Text`
  font-family: ${font.regular};
  font-size: ${sizes.s13}px;
  color: ${basic.additional_text};
  letter-spacing: ${lt_space.l7}px;
`;
