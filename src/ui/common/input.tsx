import React from 'react';
import styled from 'styled-components/native';
import Dictation from '../icons/dictation';
import SearchIcon from '../icons/search';

interface IInputProps {
  placeholder?: string;
  value?: string;
  onChange: ((text: string) => void) | undefined;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  const placeholderGuard = placeholder ? placeholder : 'Search';
  return (
    <Box>
      <SearchIcon />
      <StyledInput
        placeholder={placeholderGuard}
        onChangeText={onChange}
        value={value}
      />
      <Dictation />
    </Box>
  );
};

const Box = styled.View`
  margin-left: 19px;
  margin-right: 19px;
  margin-top: 20px;
  margin-bottom: 8.5px;
  padding-left: 11px;
  padding-right: 11px;
  padding-bottom: 5;
  padding-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.graybase.gray_6};
  border-radius: 10px;
`;
const StyledInput = styled.TextInput`
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
`;
