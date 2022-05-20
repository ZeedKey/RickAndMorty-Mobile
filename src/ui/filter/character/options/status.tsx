import { Multioption } from '@ui/common'
import React from 'react'
import { CharacterSection } from '../section/character'

export const StatusOptions: React.FC = () => {
  return (
    <Multioption title="Status">
      <CharacterSection label="Alive" name="isAlive" />
      <CharacterSection label="Dead" name="isDead" />
      <CharacterSection label="Unknown" name="isUnknown" />
    </Multioption>
  )
}
