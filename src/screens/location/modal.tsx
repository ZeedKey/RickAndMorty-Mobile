import React, {useContext, useEffect} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {
  DimensionFilter,
  LocationNameFilter as NameFilter,
  TypeFilter,
} from '@ui/modal';
import {LocationContext, LocationFormContext} from '@store';
import {getAnyChoosed} from '@utils';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const LocationFilterModal: React.FC<IModalProps> = ({
  isShown,
  setShown,
}) => {
  const {filter, applyFilter, resetFilter} = useContext(LocationContext);
  const {form, setForm, resetForm} = useContext(LocationFormContext);

  useEffect(() => {
    setForm(filter);
  }, [setShown, isShown]);

  const onApplyPressed = () => {
    applyFilter(form);
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
      <TypeFilter />
      <DimensionFilter />
    </ModalMenu>
  );
};
