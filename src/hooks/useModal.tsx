import {ModalMenu} from '@ui/common';
import React, {useState} from 'react';

export const useModal = () => {
  const [isShown, setShown] = useState<boolean>(false);
  return {
    isShown: isShown,
    setShown: setShown,
    Modal: ({children}) => (
      <ModalMenu showModal={isShown} setShowModal={setShown}>
        {children}
      </ModalMenu>
    ),
  };
};
