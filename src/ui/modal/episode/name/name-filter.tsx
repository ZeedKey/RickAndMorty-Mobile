import {useModal} from '@hooks';
import React from 'react';
import {EpisodeNameModal as NameModal} from './name-input';
import {EpisodeNameOption} from './name-option';

export const EpisodeNameFilter = () => {
  const {isShown, setShown} = useModal();
  const handleOpen = () => setShown(true);

  return (
    <>
      <EpisodeNameOption onPress={handleOpen} />
      <NameModal isShown={isShown} setShown={setShown} />
    </>
  );
};
