import { useFetchCharacters } from '@hooks'
import { basic } from '@theme'
import { Input, List } from '@ui/common'
import React, { useContext } from 'react'
import { useNavigation } from 'src/navigation/routes'
import { CharacterContext } from 'src/store/character-store'
import styled from 'styled-components/native'

export const NameOption: React.FC = () => {
  const nav = useNavigation()
  const { filter, setFilter } = useContext(CharacterContext)
  const { data, renderItem, pagination } = useFetchCharacters({
    name: filter.name,
  })

  const onInputChange = (name: string) => {
    setFilter({ ...filter, name: name })
  }

  nav.setOptions({
    title: 'Name',
  })

  return (
    <Box>
      <Input onChange={onInputChange} value={filter.name} />

      <List
        data={data?.characters.results}
        renderItem={renderItem}
        handlePage={pagination}
      />
    </Box>
  )
}

const Box = styled.View`
  background-color: ${basic.white};
`
