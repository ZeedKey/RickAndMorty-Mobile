import {useFetchCharacters} from '@hooks';
import {CharacterContext} from '@store';
import {Input, List, ModalMenu} from '@ui/common';
import React, {useContext} from 'react';
import {useNavigation} from 'src/navigation/routes';
import styled from 'styled-components/native';

interface ICharNameModalProps {
  isShown: boolean;
  setShown: (isShown: boolean) => void;
}

export const CharNameModal: React.FC<ICharNameModalProps> = ({
  isShown,
  setShown,
}) => {
  const {filter, setFilter} = useContext(CharacterContext);
  const {data, renderItem, pagination} = useFetchCharacters({
    name: filter.name,
  });
  const onInputChange = (name: string) => {
    setFilter({...filter, name: name});
  };
  return (
    <ModalMenu showModal={isShown} setShowModal={setShown}>
      <Box>
        <Input onChange={onInputChange} value={filter.name} />

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
