import {basic, font, graybase, lt_space, sizes} from '@theme';
import React from 'react';
import styled from 'styled-components/native';

interface IDetailOptionProps {
  title?: string;
  body?: string;
  onPress?: () => void;
}

export const DetailOption: React.FC<IDetailOptionProps> = ({
  title,
  body,
  onPress,
}) => {
  return (
    <Box onPress={onPress}>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Box>
  );
};

const Title = styled.Text`
  font-family: ${font.bold};
  color: ${basic.black};
  letter-spacing: -${lt_space.l41}px;
  font-size: ${sizes.s17}px;
`;
const Body = styled.Text`
  font-family: ${font.regular};
  color: ${basic.additional_text};
  letter-spacing: -${lt_space.l41}px;
  font-size: ${sizes.s15}px;
`;
const Box = styled.Pressable`
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  border-bottom-width: 1px;
  border-color: ${graybase.gray_5};
`;
