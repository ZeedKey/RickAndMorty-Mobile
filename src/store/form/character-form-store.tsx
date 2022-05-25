import React, {createContext, useState} from 'react';
import {ICharacterFilterState} from '../character-store';

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
  isAnyChoosed: false,
  isAnyGenderChoosed: false,
  isAnyStatusChoosed: false,
};

export const CharFormContext = createContext({
  form: initialState,
  setForm: (val: ICharacterFilterState) => {},
});
export const CharFormProvider = ({children}: {children: React.ReactNode}) => {
  const [form, setForm] = useState(initialState || {});
  return (
    <CharFormContext.Provider
      value={{
        form,
        setForm,
      }}>
      {children}
    </CharFormContext.Provider>
  );
};
