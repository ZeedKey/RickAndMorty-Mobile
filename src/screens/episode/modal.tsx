import React, {useContext, useState} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {EpisodeContext, EpisodeFormContext} from '@store';
import {
  EpisodeModal,
  EpisodeNameModal,
  EpisodeNameOption,
  EpisodeOption,
} from '@ui/modal';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const EpisodeFilter: React.FC<IModalProps> = ({isShown, setShown}) => {
  const {setFilter} = useContext(EpisodeContext);
  const {form, setForm} = useContext(EpisodeFormContext);

  const [isNameModalShown, setNameModalShown] = useState<boolean>(false);
  const [isEpisodeModalShown, setEpisodeModalShown] = useState<boolean>(false);

  const onApplyPressed = () => {
    setFilter({...form});
    setShown(false);
  };
  const onClearPressed = () => {
    setFilter({});
    setForm({});
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader onApply={onApplyPressed} onClear={onClearPressed} />
      <EpisodeNameOption onPress={() => setNameModalShown(true)} />
      <EpisodeOption onPress={() => setEpisodeModalShown(true)} />

      <EpisodeModal
        isShown={isEpisodeModalShown}
        setShown={setEpisodeModalShown}
      />
      <EpisodeNameModal
        isShown={isNameModalShown}
        setShown={setNameModalShown}
      />
    </ModalMenu>
  );
};
