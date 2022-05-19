import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

const initialState = {
  name: '',
  species: '',
}

export const EpisodeContext = createContext({
  filter: initialState,
  setFilter: (val: any) => {},
})
export const CharacterProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [filter, setFilter] = useState(initialState)
  return (
    <EpisodeContext.Provider
      value={{
        filter,
        setFilter,
      }}>
      {children}
    </EpisodeContext.Provider>
  )
}
