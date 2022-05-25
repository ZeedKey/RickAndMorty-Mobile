import React, {createContext, useState} from 'react';

export interface ICharacterFilterState {
  name: string;
  species: string;
  isAlive: boolean;
  isDead: boolean;
  isUnknown: boolean;
  isFemale: boolean;
  isMale: boolean;
  isGenderless: boolean;
  isGenderUnknown: boolean;
  isApplied: boolean;
  isAnyChoosed: boolean;
  isAnyGenderChoosed: boolean;
  isAnyStatusChoosed: boolean;
}
interface IInitialStateProps {
  filter: ICharacterFilterState;
  setFilter: React.Dispatch<React.SetStateAction<ICharacterFilterState>>;
}

const initialState: IInitialStateProps = {
  filter: {
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
    isAnyChoosed: false,
    isAnyGenderChoosed: false,
    isAnyStatusChoosed: false,
  },
  setFilter: () => null,
};

export const CharacterContext = createContext(initialState);

export const CharacterProvider = ({children}: {children: React.ReactNode}) => {
  const [filter, setFilter] = useState(initialState.filter);

  return (
    <CharacterContext.Provider value={{filter, setFilter}}>
      {children}
    </CharacterContext.Provider>
  );
};
