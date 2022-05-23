import React, {useContext, useState} from 'react';
import {List} from '@ui/common';
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
    gender:
      (filter.isMale && 'male') ||
      (filter.isFemale && 'female') ||
      (filter.isGenderUnknown && 'unknown') ||
      (filter.isGenderless && 'genderless') ||
      '',
    status:
      (filter.isAlive && 'Alive') ||
      (filter.isDead && 'Dead') ||
      (filter.isUnknown && 'Unknown') ||
      '',
    page: 1,
  });
  const onHeaderClick = () => setFilterShown(true);
  const isAnyTrue = !Object.values(filter).every(item => !!item === false);

  return (
    <CharFormProvider>
      <MainLayout
        title="Characters"
        callback={onHeaderClick}
        isFilterActive={isAnyTrue}>
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
