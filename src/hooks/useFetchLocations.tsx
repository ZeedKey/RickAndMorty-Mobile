import { Location } from '@ui/badges'
import React from 'react'
import { Location as Model, useGetLocationsQuery } from 'src/schemas/generated'

export const useFetchLocations = () => {
  const { data, fetchMore } = useGetLocationsQuery()

  const renderItem = ({ item }: { item: Model }) => <Location {...item} />

  const onEndReached = async () => {
    fetchMore({
      variables: { page: data?.locations.info.next },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (
          !fetchMoreResult ||
          fetchMoreResult.locations.results.length === 0 ||
          data?.locations.info.next === null
        ) {
          return previousResult
        }
        return {
          locations: {
            info: {
              ...fetchMoreResult.locations.info,
            },
            results: [
              ...previousResult.locations.results,
              ...fetchMoreResult.locations.results,
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
