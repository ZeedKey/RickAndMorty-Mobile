import {GendersEnum} from '@models';
import React, {createContext, useState} from 'react';

export interface ICharacterFilterState {
  name?: string;
  species?: string;
  status?: string;
  gender?: GendersEnum | '';
  isAnyChoosed?: boolean;
  isAnyGenderChoosed?: boolean;
  isAnyStatusChoosed?: boolean;
}
interface IInitialStateProps {
  filter: ICharacterFilterState;
  resetFilter: () => void;
  applyFilter: any;
}

export const initialState: IInitialStateProps = {
  filter: {
    name: '',
    species: '',
    gender: '',
    status: '',
  },
  resetFilter: () => null,
  applyFilter: () => null,
};

export const CharacterContext = createContext(initialState);

export const CharacterProvider = ({children}: {children: React.ReactNode}) => {
  const [filter, setFilter] = useState(initialState.filter || {});

  const applyFilter = (form: ICharacterFilterState) => {
    setFilter(form);
  };

  const resetFilter = () => {
    setFilter(initialState.filter);
  };

  return (
    <CharacterContext.Provider value={{filter, resetFilter, applyFilter}}>
      {children}
    </CharacterContext.Provider>
  );
};
