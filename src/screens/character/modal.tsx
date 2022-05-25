import React from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {
  CharacterNameFilter as NameFilter,
  GenderOptions,
  SpeciesFilter,
  StatusOptions,
} from '@ui/modal';
import {useCharacterFilter} from '@hooks';
import {getAnyChoosed} from '@utils';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharacterFilterModal: React.FC<IModalProps> = ({
  isShown,
  setShown,
}) => {
  const {setFilter, reset, form} = useCharacterFilter();

  const onApplyPressed = () => {
    setFilter({...form});
    setShown(false);
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader
        onApply={onApplyPressed}
        onClear={reset}
        isActive={getAnyChoosed(form)}
      />
      <NameFilter />
      <SpeciesFilter />
      <GenderOptions />
      <StatusOptions />
    </ModalMenu>
  );
};
