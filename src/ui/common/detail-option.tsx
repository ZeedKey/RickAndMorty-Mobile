import {Body2, Body3} from '@theme';
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

const Title = styled(Body2)`
  letter-spacing: -${props => props.theme.letterspacing.l38}px;
`;
const Body = styled(Body3)`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.basic.additional_text};
  letter-spacing: -${props => props.theme.letterspacing.l38}px;
`;
const Box = styled.Pressable`
  padding-top: 8.5px;
  padding-bottom: 8.5px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.graybase.gray_5};
`;
