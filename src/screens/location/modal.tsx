import React, {useContext, useState} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {LocationContext, LocationFormContext} from '@store';
import {
  DimensionModal,
  LocDimensionOption,
  LocNameOption,
  LocTypeOption,
  NameModal,
  TypeModal,
} from '@ui/modal';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const LocationFilter: React.FC<IModalProps> = ({isShown, setShown}) => {
  const {setFilter} = useContext(LocationContext);
  const {form} = useContext(LocationFormContext);

  const [isNameModalShown, setNameModalShown] = useState<boolean>(false);
  const [isTypeModalShown, setTypeModalShown] = useState<boolean>(false);
  const [isDimensionModalShown, setDimensionModalShown] =
    useState<boolean>(false);

  const onApplyPressed = () => {
    setFilter({...form});
    setShown(false);
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader onPress={onApplyPressed} />
      <LocNameOption onPress={() => setNameModalShown(true)} />
      <LocTypeOption onPress={() => setTypeModalShown(true)} />
      <LocDimensionOption onPress={() => setDimensionModalShown(true)} />

      <NameModal isShown={isNameModalShown} setShown={setNameModalShown} />
      <TypeModal isShown={isTypeModalShown} setShown={setTypeModalShown} />
      <DimensionModal
        isShown={isDimensionModalShown}
        setShown={setDimensionModalShown}
      />
    </ModalMenu>
  );
};
