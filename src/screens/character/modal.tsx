import React, {useContext, useEffect, useState} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import styled from 'styled-components/native';
import {CharacterContext, CharFormContext, CharFormProvider} from '@store';
import {
  CharNameModal as NameModal,
  GenderOptions,
  NameOption,
  SpeciesOption,
} from '@ui/modal';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharacterFilter: React.FC<IModalProps> = ({isShown, setShown}) => {
  const {filter, setFilter} = useContext(CharacterContext);
  const {form} = useContext(CharFormContext);
  const [isNameModalShown, setNameModalShown] = useState<boolean>(false);
  const [isSpeciesModalShown, setSpeciesModalShown] = useState<boolean>(false);

  const onApplyPressed = () => {
    setFilter({...form});
    console.log(form);
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader title="Filter" onPress={onApplyPressed} />
      <Box>
        <NameOption onPress={() => setNameModalShown(true)} />
        <SpeciesOption
          isActive={!!form.species}
          onPress={() => setSpeciesModalShown(true)}
        />
        <GenderOptions />
        {/* <StatusOptions onPress={onOptionPressed} /> */}
      </Box>
      <NameModal isShown={isNameModalShown} setShown={setNameModalShown} />
    </ModalMenu>
  );
};

const Box = styled.View``;
