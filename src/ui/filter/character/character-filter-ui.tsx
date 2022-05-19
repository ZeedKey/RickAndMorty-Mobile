import { CharacterContext } from '@store'
import { Option } from '@ui/common'
import React, { useContext, useEffect, useState } from 'react'
import { Routes, useNavigation } from 'src/navigation/routes'
import { GenderOptions } from './gender-options'
import { StatusOptions } from './status-options'

export const CharacterFilterUi: React.FC = () => {
  const nav = useNavigation()
  const handleTo = (name: string) => nav.navigate(name)
  const { filter, setFilter } = useContext(CharacterContext)
  const [isName, setIsName] = useState<boolean>(!!filter.name)
  const [isSpecie, setIsSpecie] = useState<boolean>(!!filter.name)

  useEffect(() => {
    filter.name.length >= 1  ? setIsName(true) : setIsName(false)
    filter.species.length >= 1 ? setIsSpecie(true) : setIsSpecie(false)
  }, [filter])

  return (
    <>
      <Option
        title="Name"
        body="Give a name"
        isActive={isName}
        onPress={() => handleTo(Routes.NameOption)}
      />
      <Option
        title="Species"
        body="Enter species"
        isActive={isSpecie}
        onPress={() => handleTo(Routes.SpeciesOption)}
      />

      <StatusOptions />
      <GenderOptions />
    </>
  )
}
