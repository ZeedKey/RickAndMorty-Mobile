import React, {useEffect} from 'react';
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
  const {setFilter, reset, form, setForm, filter} = useCharacterFilter();

  useEffect(() => {
    setForm({...filter});
  }, [setShown, isShown]);

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
