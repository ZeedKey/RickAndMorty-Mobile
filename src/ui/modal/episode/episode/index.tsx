import {useModal} from '@hooks';
import React from 'react';
import {EpisodeModal} from './episode-input';
import {EpisodeOption} from './episode-option';

export const EpisodeFilter = () => {
  const {isShown, setShown} = useModal();
  const handleOpen = () => setShown(true);
  return (
    <>
      <EpisodeOption onPress={handleOpen} />
      <EpisodeModal isShown={isShown} setShown={setShown} />
    </>
  );
};
