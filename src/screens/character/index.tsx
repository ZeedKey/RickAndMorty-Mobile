import React, {useContext} from 'react';
import {List} from '@ui/common';
import {useFetchCharacters, useModal} from '@hooks';
import {CharacterContext} from 'src/store/character-store';
import {MainLayout} from '@ui/layouts';
import {CharFormProvider as FormContext} from '@store';
import {getAnyChoosed} from '@utils';
import {CharacterFilterModal} from './modal';
import {useGetCharactersLazyQuery} from 'src/schemas/generated';

export const CharacterScreen = () => {
  const {filter} = useContext(CharacterContext);
  const {isShown, setShown} = useModal();

  const {data, renderItem, pagination} = useFetchCharacters({
    name: filter.name,
    species: filter.species,
    gender: filter.gender,
    status: filter.status,
    page: 1,
  });

  const onHeaderClick = () => setShown(true);

  return (
    <FormContext>
      <MainLayout
        title="Characters"
        callback={onHeaderClick}
        isFilterActive={getAnyChoosed(filter)}>
        <List
          data={data?.characters.results}
          renderItem={renderItem}
          handlePage={pagination}
        />
        <CharacterFilterModal isShown={isShown} setShown={setShown} />
      </MainLayout>
    </FormContext>
  );
};
