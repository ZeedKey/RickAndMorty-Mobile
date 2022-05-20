import React, {useContext, useState} from 'react';
import {ModalMenu, Option} from '@ui/common';
import styled from 'styled-components/native';
import {CharacterContext} from '@store';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharacterFilter: React.FC<IModalProps> = ({isShown, setShown}) => {
  const {filter} = useContext(CharacterContext);

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <Box>
        <Option
          title="Species"
          body="Enter species"
          isActive={!!filter.species}
          onPress={() => setShown(true)}
        />
        <Option
          title="Species"
          body="Enter species"
          isActive={!!filter.species}
          onPress={() => 1}
        />
      </Box>
    </ModalMenu>
  );
};

const Box = styled.View``;
