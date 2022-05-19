import { Character } from '@ui/badges'
import React from 'react'
import {
  Character as Model,
  useGetCharactersQuery,
} from 'src/schemas/generated'

interface IHookProps {
  name?: string
  page?: number
  species?: string
}

export const useFetchCharacters = (props: IHookProps) => {
  const { data, fetchMore } = useGetCharactersQuery({
    variables: {
      name: props?.name ?? '',
      page: props?.page ?? 1,
      species: props?.species ?? '',
    },
  })
  const renderItem = ({ item }: { item: Model }) => <Character {...item} />

  const onEndReached = async () => {
    await fetchMore({
      variables: { page: data?.characters.info.next },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (
          !fetchMoreResult ||
          fetchMoreResult.characters.results.length === 0 ||
          data?.characters.info.next === null
        ) {
          return previousResult
        }
        return {
          characters: {
            info: {
              ...(fetchMoreResult.characters.info || 5),
            },
            results: [
              ...previousResult.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        }
      },
    })
  }

  return {
    pagination: () => onEndReached(),
    data: data,
    renderItem: renderItem,
  }
}
