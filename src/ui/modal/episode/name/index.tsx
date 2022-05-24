import {useModal} from '@hooks';
import React from 'react';
import {EpisodeNameModal as NameModal} from './name-input';
import {NameOption} from './name-option';

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
