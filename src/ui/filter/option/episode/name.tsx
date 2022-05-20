import {useFetchEpisodes} from '@hooks';
import {EpisodeContext} from '@store';
import {basic} from '@theme';
import {Input, List} from '@ui/common';
import React, {useContext} from 'react';
import {useNavigation} from 'src/navigation/routes';
import styled from 'styled-components/native';

export const EpisodeNameOption: React.FC = () => {
  const nav = useNavigation();
  const {filter, setFilter} = useContext(EpisodeContext);
  const {data, renderItem, pagination} = useFetchEpisodes({
    name: filter.name,
    episode: filter.episode,
  });

  const onInputChange = (name: string) => {
    setFilter({...filter, name: name});
  };

  nav.setOptions({
    title: 'Episode',
  });

  return (
    <Box>
      <Input onChange={onInputChange} value={filter.name} />

      <List
        data={data?.episodes.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </Box>
  );
};

const Box = styled.View`
  background-color: ${basic.white};
`;
