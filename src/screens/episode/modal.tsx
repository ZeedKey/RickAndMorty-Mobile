import React from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {EpisodeFilter, EpisodeNameFilter as NameFilter} from '@ui/modal';
import {useEpisodeFilter} from '@hooks';
import {getAnyChoosed} from '@utils';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const EpisodeFilterModal: React.FC<IModalProps> = ({
  isShown,
  setShown,
}) => {
  const {setFilter, form, reset} = useEpisodeFilter();

  const onApplyPressed = () => {
    setFilter({...form});
    setShown(false);
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader
        onApply={onApplyPressed}
        onClear={reset}
        isActive={getAnyChoosed(form)}
      />
      <NameFilter />
      <EpisodeFilter />
    </ModalMenu>
  );
};
