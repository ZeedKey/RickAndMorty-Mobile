import {useModal} from '@hooks';
import React from 'react';
import {TypeModal} from './type-input';
import {LocTypeOption as TypeOption} from './type-option';

export const TypeFilter = () => {
  const {isShown, setShown} = useModal();
  const handleOpen = () => setShown(true);
  
  return (
    <>
      <TypeOption onPress={handleOpen} />
      <TypeModal isShown={isShown} setShown={setShown} />
    </>
  );
};
