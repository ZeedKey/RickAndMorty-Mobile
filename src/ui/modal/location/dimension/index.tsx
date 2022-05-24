import {useModal} from '@hooks';
import React from 'react';
import {DimensionModal} from './dimension-input';
import {LocDimensionOption as DimensionOption} from './dimension-option';

export const DimensionFilter = () => {
  const {isShown, setShown} = useModal();
  const handleOpen = () => setShown(true);
  return (
    <>
      <DimensionOption onPress={handleOpen} />
      <DimensionModal isShown={isShown} setShown={setShown} />
    </>
  );
};
