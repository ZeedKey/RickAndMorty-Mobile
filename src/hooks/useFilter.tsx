import { useEffect, useState } from 'react'
import { ICharacterFilter } from '@models'

export const useFilter = () => {
  const state = useState<ICharacterFilter>({
      character: {
          name: '',
          species: ''
      }
  })
  return state
}
