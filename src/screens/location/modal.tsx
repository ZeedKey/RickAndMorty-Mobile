import React, {useEffect} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {
  DimensionFilter,
  LocationNameFilter as NameFilter,
  TypeFilter,
} from '@ui/modal';
import {useLocationFilter} from '@hooks';
import {getAnyChoosed} from '@utils';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const LocationFilterModal: React.FC<IModalProps> = ({
  isShown,
  setShown,
}) => {
  const {setFilter, filter, reset, form, setForm} = useLocationFilter();

  useEffect(() => {
    setForm({...filter});
  }, [setShown, isShown]);

  const onApplyPressed = () => {
    setFilter({...form});
    setShown(false);
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader onApply={onApplyPressed} onClear={reset} isActive={false} />
      <NameFilter />
      <TypeFilter />
      <DimensionFilter />
    </ModalMenu>
  );
};
