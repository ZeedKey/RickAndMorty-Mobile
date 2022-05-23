import React, {useContext, useState} from 'react';
import {List, ModalMenu} from '@ui/common';
import {useFetchCharacters} from '@hooks';
import {CharacterContext} from 'src/store/character-store';
import {MainLayout} from '@ui/layouts';
import {CharacterFilter} from './modal';
import {CharFormProvider} from '@store';

export const CharacterScreen = () => {
  const {filter} = useContext(CharacterContext);
  const [isFilterShown, setFilterShown] = useState<boolean>(false);
  const {data, renderItem, pagination} = useFetchCharacters({
    name: filter.name,
    species: filter.species,
  });
  const onHeaderClick = () => setFilterShown(true);

  return (
    <CharFormProvider>
      <MainLayout title="Characters" callback={onHeaderClick}>
        <List
          data={data?.characters.results}
          renderItem={renderItem}
          handlePage={pagination}
        />
        <CharacterFilter isShown={isFilterShown} setShown={setFilterShown} />
      </MainLayout>
    </CharFormProvider>
  );
};
