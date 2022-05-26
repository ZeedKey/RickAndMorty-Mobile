import React, {useContext, useEffect} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {
  DimensionFilter,
  LocationNameFilter as NameFilter,
  TypeFilter,
} from '@ui/modal';
import {LocationContext, LocationFormContext} from '@store';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const LocationFilterModal: React.FC<IModalProps> = ({
  isShown,
  setShown,
}) => {
  const {filter, applyFilter, resetFilter} = useContext(LocationContext);
  const {form, setForm} = useContext(LocationFormContext);

  useEffect(() => {
    setForm(filter);
  }, [setShown, isShown]);

  const onApplyPressed = () => {
    applyFilter(form);
    setShown(false);
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader
        onApply={onApplyPressed}
        onClear={resetFilter}
        isActive={false}
      />
      <NameFilter />
      <TypeFilter />
      <DimensionFilter />
    </ModalMenu>
  );
};
