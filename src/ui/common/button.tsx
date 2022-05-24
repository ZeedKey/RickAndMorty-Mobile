import React, {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {ifProp} from 'styled-tools';

interface Props extends TouchableOpacityProps {
  title?: string;
  children?: ReactNode;
  onPress?: () => void;
}

export const Button = ({children, onPress, title, ...rest}: Props) => {
  return (
    <ButtonBlock
      isDisabled={Boolean(rest.disabled)}
      onPress={onPress}
      {...rest}>
      <Title>{title}</Title>
      {children}
    </ButtonBlock>
  );
};

const ButtonBlock = styled.TouchableOpacity<{isDisabled?: boolean}>`
  opacity: ${ifProp('isDisabled', '0.55', '1')};
  border-radius: 24px;
`;
const Title = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  text-align: center;
  color: ${props => props.theme.colors.accent.indigo};
`;
