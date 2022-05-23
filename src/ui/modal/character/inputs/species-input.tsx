import {useFetchCharacters} from '@hooks';
import {CharFormContext} from '@store';
import {BackButton, Input, List, ModalMenu} from '@ui/common';
import React, {useContext} from 'react';

import styled from 'styled-components/native';

interface ISpeciesModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const SpeciesModal: React.FC<ISpeciesModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(CharFormContext);
  const {data, renderItem, pagination} = useFetchCharacters({
    species: form.species,
  });
  const onInputChange = (species: string) => {
    setForm({...form, species: species});
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <BackButton onPress={() => setShown(false)} />
      <Box>
        <Input onChange={onInputChange} value={form.species} />

        <List
          data={data?.characters.results}
          renderItem={renderItem}
          handlePage={pagination}
        />
      </Box>
    </ModalMenu>
  );
};

const Box = styled.SafeAreaView``;
