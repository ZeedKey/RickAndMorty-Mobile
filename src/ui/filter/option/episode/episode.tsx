import {useFetchEpisodes} from '@hooks';
import {EpisodeContext} from '@store';
import {basic} from '@theme';
import {Input, List} from '@ui/common';
import React, {useContext} from 'react';
import {useNavigation} from 'src/navigation/routes';
import styled from 'styled-components/native';

export const EpisodeOption: React.FC = () => {
  const nav = useNavigation();
  const {filter, setFilter} = useContext(EpisodeContext);
  const {data, renderItem, pagination} = useFetchEpisodes({
    name: filter.name,
    episode: filter.episode,
  });

  const onInputChange = (episode: string) => {
    setFilter({...filter, episode: episode});
  };

  nav.setOptions({
    title: 'Name',
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
