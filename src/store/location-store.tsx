import { ICharacterFilter } from '@models'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

const filter = useState({
  name: '',
  species: '',
})

export const LocationContext = createContext(filter)
