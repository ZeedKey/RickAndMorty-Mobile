import {useFetchCharacters} from '@hooks';
import {CharacterContext} from '@store';
import {basic} from '@theme';
import {Input, List} from '@ui/common';
import React, {useContext} from 'react';
import {useNavigation} from 'src/navigation/routes';
import styled from 'styled-components/native';

export const SpeciesOption: React.FC = () => {
  const nav = useNavigation();
  const {filter, setFilter} = useContext(CharacterContext);
  const {data, renderItem, pagination} = useFetchCharacters({
    species: filter.species,
    name: filter.name,
  });

  const onInputChange = (species: string) => {
    setFilter({...filter, species: species});
  };

  nav.setOptions({
    title: 'Species',
  });

  return (
    <Box>
      <Input onChange={onInputChange} value={filter.species} />

      <List
        data={data?.characters.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </Box>
  );
};

const Box = styled.View`
  background-color: ${basic.white};
`;
