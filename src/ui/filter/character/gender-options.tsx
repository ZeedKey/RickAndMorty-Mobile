import { Multioption } from '@ui/common'
import React from 'react'
import { CharacterSection } from './character-section'

export const GenderOptions: React.FC = () => {
  return (
    <Multioption title="Gender">
      <CharacterSection label="Female" name="isFemale" />
      <CharacterSection label="Male" name="isMale" />
      <CharacterSection label="Genderless" name="isGenderless" />
      <CharacterSection label="Unknown" name="isGenderUnknown" />
    </Multioption>
  )
}
 