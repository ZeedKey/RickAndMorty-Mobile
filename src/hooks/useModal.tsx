import {ModalMenu} from '@ui/common';
import React, {useState} from 'react';

export const useModal = () => {
  const [isShown, setShown] = useState<boolean>(false);
  return {
    isShown: isShown,
    setShown: setShown,
    modalContent: (children: React.ReactNode) => (
      <ModalMenu showModal={isShown} setShowModal={setShown}>
        {children}
      </ModalMenu>
    ),
  };
};
