import { List } from '@ui/common'
import React from 'react'
import {
  Character,
  Episode as Model,
  useGetCharactersByIdQuery,
} from 'src/schemas/generated'
import { IProps } from '@ui/models'
import { Episode } from '@ui/badges'
import { RouteProp, useRoute } from '@react-navigation/native'
import { CharacterHeader } from './character-header'
import { DetailLayout } from '@ui/layouts'

export const CharacterList: React.FC<IProps> = () => {
  const route: RouteProp<{ params: { character: Character } }, 'params'> =
    useRoute()
  const { data } = useGetCharactersByIdQuery({
    variables: { id: route.params.character.id },
  })

  const renderItem = ({ item }: { item: Model }) => <Episode {...item} />

  return (
    <DetailLayout title={data?.character.name}>
      <List
        data={data?.character.episode}
        renderItem={renderItem}
        columns={1}
        header={() => <CharacterHeader data={data} />}
      />
    </DetailLayout>
  )
}
