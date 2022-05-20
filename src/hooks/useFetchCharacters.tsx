import {Character} from '@ui/badges';
import React from 'react';
import {Character as Model, useGetCharactersQuery} from 'src/schemas/generated';

interface ICharHookProps {
  name?: string;
  page?: number;
  species?: string;
}

export const useFetchCharacters = (props: ICharHookProps) => {
  const {data, fetchMore} = useGetCharactersQuery({
    variables: {
      name: props?.name ?? '',
      page: props?.page ?? 1,
      species: props?.species ?? '',
      gender: '',
    },
  });
  const renderItem = ({item}: {item: Model}) => <Character {...item} />;

  const onEndReached = async () => {
    await fetchMore({
      variables: {page: data?.characters?.info?.next},
      updateQuery: (previousResult, {fetchMoreResult}) => {
        if (
          !fetchMoreResult ||
          fetchMoreResult?.characters?.results?.length === 0 ||
          data?.characters?.info?.next === null
        ) {
          return previousResult;
        }
        return {
          characters: {
            info: {
              ...fetchMoreResult?.characters?.info,
            },
            results: [
              ...previousResult.characters?.results,
              ...fetchMoreResult?.characters?.results,
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
