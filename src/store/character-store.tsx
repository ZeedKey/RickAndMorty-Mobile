import React, { createContext, useState } from 'react'

export interface ICharacterFilterState {
  name: string
  species: string
  isAlive: boolean
  isDead: boolean
  isUnknown: boolean
  isFemale: boolean
  isMale: boolean
  isGenderless: boolean
  isGenderUnknown: boolean
  isApplied: boolean
}

const initialState: ICharacterFilterState = {
  name: '',
  species: '',
  isAlive: false,
  isDead: false,
  isUnknown: false,
  isFemale: false,
  isMale: false,
  isGenderless: false,
  isGenderUnknown: false,
  isApplied: false,
}

export const CharacterContext = createContext({
  filter: initialState,
  setFilter: (val: ICharacterFilterState) => {},
})
export const CharacterProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [filter, setFilter] = useState(initialState)
  return (
    <CharacterContext.Provider
      value={{
        filter,
        setFilter,
      }}>
      {children}
    </CharacterContext.Provider>
  )
}
