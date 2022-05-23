import {useFetchCharacters} from '@hooks';
import {CharFormContext} from '@store';
import {BackButton, Input, List, ModalMenu} from '@ui/common';
import React, {useContext} from 'react';

import styled from 'styled-components/native';

interface ICharNameModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharNameModal: React.FC<ICharNameModalProps> = ({
  isShown,
  setShown,
}) => {
  const {form, setForm} = useContext(CharFormContext);
  const {data, renderItem, pagination} = useFetchCharacters({
    name: form.name,
  });
  const onInputChange = (name: string) => {
    setForm({...form, name: name});
  };

  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <BackButton onPress={() => setShown(false)} />
      <Box>
        <Input onChange={onInputChange} value={form.name} />

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
