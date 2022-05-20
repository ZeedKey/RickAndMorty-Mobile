import React, {useContext, useState} from 'react';
import {ModalHeader, ModalMenu, Option} from '@ui/common';
import styled from 'styled-components/native';
import {CharacterContext} from '@store';
import {CharNameModal as NameModal, GenderOptions} from '@ui/modal';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharacterFilter: React.FC<IModalProps> = ({isShown, setShown}) => {
  const {filter} = useContext(CharacterContext);
  const [isNameModalShown, setNameModalShown] = useState<boolean>(false);

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader title="Filter" />
      <Box>
        <Option
          title="Name"
          body="Give a name"
          isActive={!!filter.species}
          onPress={() => setNameModalShown(true)}
        />
        <Option
          title="Species"
          body="Enter species"
          isActive={!!filter.species}
          onPress={() => 1}
        />
        <GenderOptions />
        {/* <NameModal isShown={isNameModalShown} setShown={setNameModalShown} /> */}
      </Box>
    </ModalMenu>
  );
};

const Box = styled.View``;
