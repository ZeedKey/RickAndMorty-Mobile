import React, {useContext, useEffect} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {
  CharacterNameFilter as NameFilter,
  GenderOptions,
  SpeciesFilter,
  StatusOptions,
} from '@ui/modal';
import {getAnyChoosed} from '@utils';
import {CharacterContext, CharFormContext} from '@store';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharacterFilterModal: React.FC<IModalProps> = ({
  isShown,
  setShown,
}) => {
  const {filter, applyFilter, resetFilter} = useContext(CharacterContext);
  const {form, setForm, resetForm} = useContext(CharFormContext);

  useEffect(() => {
    setForm(filter);
  }, [setShown, isShown]);

  const onApplyPressed = () => {
    applyFilter({...form});
    setShown(false);
  };
  const onClearPressed = () => {
    resetFilter();
    resetForm();
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader
        onApply={onApplyPressed}
        onClear={onClearPressed}
        isActive={getAnyChoosed(form)}
      />
      <NameFilter />
      <SpeciesFilter />
      <StatusOptions />
      <GenderOptions />
    </ModalMenu>
  );
};
