import {Character} from '@ui/badges';
import React from 'react';
import {Character as Model, useGetCharactersQuery} from 'src/schemas/generated';

export const useFetchCharacters = (props: any) => {

  const {data, fetchMore} = useGetCharactersQuery({
    variables: {
      name: props?.name ?? '',
      page: props?.page ?? 1,
      species: props?.species ?? '',
      gender: props.gender ?? '',
      status: props.status ?? '',
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
