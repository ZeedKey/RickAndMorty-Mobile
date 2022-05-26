import React, {useContext, useEffect} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {EpisodeFilter, EpisodeNameFilter as NameFilter} from '@ui/modal';
import {getAnyChoosed} from '@utils';
import {EpisodeContext, EpisodeFormContext} from '@store';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const EpisodeFilterModal: React.FC<IModalProps> = ({
  isShown,
  setShown,
}) => {
  const {filter, applyFilter, resetFilter} = useContext(EpisodeContext);
  const {form, setForm, resetForm} = useContext(EpisodeFormContext);

  useEffect(() => {
    setForm(filter);
  }, [setShown, isShown]);

  const onApplyPressed = () => {
    applyFilter(form);
    setShown(false);
  };
  const onClearPressed = () => {
    resetFilter();
    resetForm();
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader
        onApply={onApplyPressed}
        onClear={onClearPressed}
        isActive={getAnyChoosed(form)}
      />
      <NameFilter />
      <EpisodeFilter />
    </ModalMenu>
  );
};
