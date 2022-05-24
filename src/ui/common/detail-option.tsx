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
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.basic.black};
  letter-spacing: -${props => props.theme.letterspacing.l41}px;
  font-size: ${props => props.theme.sizes.s17}px;
`;
const Body = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.basic.additional_text};
  letter-spacing: -${props => props.theme.letterspacing.l41}px;
  font-size: ${props => props.theme.sizes.s15}px;
`;
const Box = styled.Pressable`
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.graybase.gray_5};
`;
