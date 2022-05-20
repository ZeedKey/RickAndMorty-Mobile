import { CharacterContext, ICharacterFilterState } from '@store'
import { Section } from '@ui/common'
import React, { useContext } from 'react'

interface ICharSectionProps {
  label: string
  name: keyof ICharacterFilterState
}

export const CharacterSection: React.FC<ICharSectionProps> = ({
  label,
  name,
}) => {
  const { filter, setFilter } = useContext(CharacterContext)
  const onPress = () => {
    setFilter({ ...filter, [name]: !filter[name] })
  }
  return <Section label={label} isActive={!!filter[name]} onPress={onPress} />
}