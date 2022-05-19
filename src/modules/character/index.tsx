import React, { useContext } from 'react'
import { MainLayout } from 'src/ui/layouts/MainLayout'
import { List } from '@ui/common'
import { useFetchCharacters } from '@hooks'
import { CharacterContext } from 'src/store/character-store'

export const CharacterScreen = () => {
  const { filter } = useContext(CharacterContext)
  const { data, renderItem, pagination } = useFetchCharacters({
    name: filter.name,
    species: filter.species,
  })
  return (
    <MainLayout>
      <List
        data={data?.characters.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </MainLayout>
  )
}
