import React, {useContext, useState} from 'react';
import {List} from '@ui/common';
import {useFetchCharacters} from '@hooks';
import {CharacterContext} from 'src/store/character-store';
import {MainLayout} from '@ui/layouts';
import {CharFormProvider as FormContext} from '@store';
import {getAnyChoosed} from '@utils';
import {CharacterFilterModal} from './modal';

export const CharacterScreen = () => {
  const {filter} = useContext(CharacterContext);
  const [isVisible, setVisible] = useState<boolean>(false);

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

  const onHeaderClick = () => setVisible(true);

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
        <CharacterFilterModal isShown={isVisible} setShown={setVisible} />
      </MainLayout>
    </FormContext>
  );
};
