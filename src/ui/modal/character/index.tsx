import React, {useContext, useState} from 'react';
import {ModalMenu, Option} from '@ui/common';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import { Routes, useNavigation } from 'src/navigation/routes';
import { CharacterContext } from '@store';

export const CharacterModal = () => {
  const nav = useNavigation();
  const [isShown, setIsShow] = useState<boolean>(true);
  const {filter} = useContext(CharacterContext)

  return (
    <ModalMenu showModal={isShown} setShowModal={setIsShow}>
      <Box>
      <Option
        title="Species"
        body="Enter species"
        isActive={!!filter.species}
        onPress={() => handleTo(Routes.SpeciesOption)}
      />
      <Option
        title="Species"
        body="Enter species"
        isActive={!!filter.species}
        onPress={() => handleTo(Routes.SpeciesOption)}
      />
      </Box>
    </ModalMenu>
  );
};

const Box = styled.View``;
