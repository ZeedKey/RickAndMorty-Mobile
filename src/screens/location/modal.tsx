import React, {useContext} from 'react';
import {ModalHeader, ModalMenu} from '@ui/common';
import {LocationContext, LocationFormContext} from '@store';
import styled from 'styled-components/native';

interface IModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const LocationFilterModal: React.FC<IModalProps> = ({
  isShown,
  setShown,
}) => {
  const {setFilter} = useContext(LocationContext);
  const {form} = useContext(LocationFormContext);

  const onApplyPressed = () => {
    setFilter({...form});
    setShown(false);
  };
  const onClearPressed = () => {
    setFilter({...form});
    setShown(false);
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <ModalHeader onPress={onApplyPressed} />
      <Title>423423423432</Title>
      {/* <NameFilter />
      <TypeFilter />
      <DimensionFilter /> */}
    </ModalMenu>
  );
};

const Title = styled.Text`
  color: black;
`;
