import React, {useContext} from 'react';
import {List} from '@ui/common';
import {useFetchCharacters} from '@hooks';
import {CharacterContext} from 'src/store/character-store';
import {MainLayout} from '@ui/layouts';

export const CharacterScreen = () => {
  const {filter} = useContext(CharacterContext);
  const {data, renderItem, pagination} = useFetchCharacters({
    name: filter.name,
    species: filter.species,
  });
  return (
    <MainLayout>
      <List
        data={data?.characters.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </MainLayout>
  );
};
