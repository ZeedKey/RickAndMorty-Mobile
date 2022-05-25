import React from 'react';
import styled from 'styled-components/native';

export const Multioption: React.FC<{title: string}> = ({children, title}) => {
  return (
    <Box>
      <Title>{title}</Title>
      <OptionList>{children}</OptionList>
    </Box>
  );
};

const Box = styled.View`
  margin-bottom: 30px;
`;
const OptionList = styled.View`
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-top-color: ${props => props.theme.colors.graybase.gray_3};
  border-bottom-color: ${props => props.theme.colors.graybase.gray_3};
`;
const Title = styled.Text`
  margin-left: 19px;
  margin-bottom: 8.5px;
  color: ${props => props.theme.colors.basic.additional_text};
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.s15}px;
  letter-spacing: -${props => props.theme.letterspacing.l7}px;
`;
