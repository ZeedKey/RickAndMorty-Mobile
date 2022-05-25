import React, {useContext, useState} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import styled from 'styled-components/native';
import {CharacterContext, CharFormContext} from '@store';
import {
  CharNameModal as NameModal,
  GenderOptions,
  NameOption,
  SpeciesModal,
  SpeciesOption,
  StatusOptions,
} from '@ui/modal';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharacterFilter: React.FC<IModalProps> = ({isShown, setShown}) => {
  const {setFilter} = useContext(CharacterContext);
  const {form, setForm} = useContext(CharFormContext);

  const [isNameModalShown, setNameModalShown] = useState<boolean>(false);
  const [isSpeciesModalShown, setSpeciesModalShown] = useState<boolean>(false);

  const onApplyPressed = () => {
    setFilter({...form});
    setShown(false);
  };
  const onClearPressed = () => {
    setFilter({});
    setForm({});
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader onApply={onApplyPressed} onClear={onClearPressed} />
      <Box>
        <NameOption onPress={() => setNameModalShown(true)} />
        <SpeciesOption onPress={() => setSpeciesModalShown(true)} />
        <StatusOptions />
        <GenderOptions />
      </Box>

      <NameModal isShown={isNameModalShown} setShown={setNameModalShown} />
      <SpeciesModal
        isShown={isSpeciesModalShown}
        setShown={setSpeciesModalShown}
      />
    </ModalMenu>
  );
};

const Box = styled.View``;
