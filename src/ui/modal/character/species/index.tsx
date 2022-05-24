import {useModal} from '@hooks';
import React from 'react';
import {SpeciesModal} from './species-input';
import {SpeciesOption} from './species-option';

export const Species = () => {
  const {isShown, setShown} = useModal();
  const handleOpen = () => setShown(true);
  return (
    <>
      <SpeciesOption onPress={handleOpen} />
      <SpeciesModal isShown={isShown} setShown={setShown} />
    </>
  );
};
