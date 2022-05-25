import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {ArrowIcon} from '../icons/arrow';
import {Checkbox} from '@ui/common';
import {Body2} from '@theme';

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
        <Checkbox isChecked={isActive} />

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
  border-top-color: ${props => props.theme.colors.graybase.gray_3};
  border-bottom-color: ${props => props.theme.colors.graybase.gray_3};
`;
const TextView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled(Body2)`
  letter-spacing: ${props => props.theme.letterspacing.l41}px;
`;
const Body = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.sizes.s13}px;
  color: ${props => props.theme.colors.basic.additional_text};
  letter-spacing: ${props => props.theme.letterspacing.l7}px;
`;
