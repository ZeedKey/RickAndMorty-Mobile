import {Episode} from '@ui/badges';
import React from 'react';
import {Episode as Model, useGetEpisodesQuery} from 'src/schemas/generated';

interface IEpHookProps {
  name?: string;
  episode?: string;
}

export const useFetchEpisodes = ({name, episode}: IEpHookProps) => {
  const {data, fetchMore} = useGetEpisodesQuery({
    variables: {
      page: 0,
      name: name || '',
      episode: episode || '',
    },
  });
  const renderItem = ({item}: {item: Model}) => <Episode {...item} />;

  const onEndReached = async () => {
    fetchMore({
      variables: {page: data?.episodes?.info?.next},
      updateQuery: (previousResult, {fetchMoreResult}) => {
        if (
          !fetchMoreResult ||
          fetchMoreResult.episodes.results.length === 0 ||
          data?.episodes.info?.next === null
        ) {
          return previousResult;
        }
        return {
          episodes: {
            info: {
              ...fetchMoreResult.episodes.info,
            },
            results: [
              ...previousResult.episodes.results,
              ...fetchMoreResult.episodes.results,
            ],
          },
        };
      },
    });
  };

  return {
    pagination: () => onEndReached(),
    data: data,
    renderItem: renderItem,
  };
};
