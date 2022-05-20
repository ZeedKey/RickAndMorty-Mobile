import {CharacterContext} from '@store';
import {basic} from '@theme';
import {Option} from '@ui/common';
import React, {useContext} from 'react';
import {Routes, useNavigation} from 'src/navigation/routes';
import {CharacterModal} from 'src/ui/modal/character';
import styled from 'styled-components/native';
import {GenderOptions} from './options/gender';
import {StatusOptions} from './options/status';

export const CharacterFilterUi: React.FC = () => {
  const nav = useNavigation();
  const handleTo = (name: string) => nav.navigate(name);
  const {filter} = useContext(CharacterContext);

  return (
    <Box>
      <CharacterModal />
    </Box>
  );
};

const Box = styled.View`
  height: 100%;
  background-color: ${basic.white};
`;
