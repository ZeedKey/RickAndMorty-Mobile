import React, {useContext} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {LocationContext, LocationFormContext} from '@store';
import styled from 'styled-components/native';
import {
  DimensionFilter,
  LocationNameFilter as NameFilter,
  TypeFilter,
} from '@ui/modal';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const LocationFilterModal: React.FC<IModalProps> = ({
  isShown,
  setShown,
}) => {
  const {setFilter} = useContext(LocationContext);
  const {form, setForm} = useContext(LocationFormContext);

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
      <NameFilter />
      <TypeFilter />
      <DimensionFilter />
    </ModalMenu>
  );
};
