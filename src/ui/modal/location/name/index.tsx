import {useModal} from '@hooks';
import React from 'react';
import {LocNameOption as NameOption} from './name-option';
import {NameModal} from './name-input';

export const NameFilter = () => {
  const {isShown, setShown} = useModal();
  const handleOpen = () => setShown(true);
  return (
    <>
      <NameOption onPress={handleOpen} />
      <NameModal isShown={isShown} setShown={setShown} />
    </>
  );
};
