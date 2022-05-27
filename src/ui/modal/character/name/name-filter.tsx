import {useModal} from '@hooks';
import React from 'react';
import {CharNameModal as NameModal} from './name-input';
import {NameOption} from './name-option';

export const CharacterNameFilter = () => {
  const {isShown, setShown} = useModal();
  const handleOpen = () => setShown(true);
  
  return (
    <>
      <NameOption onPress={handleOpen} />
      <NameModal isShown={isShown} setShown={setShown} />
    </>
  );
};
