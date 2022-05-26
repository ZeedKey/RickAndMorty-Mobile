import React, {createContext, useState} from 'react';
import {ICharacterFilterState, initialState} from '../character-store';

type ChangeFieldType = <T extends keyof ICharacterFilterState>(
  fieldName: T,
  value: ICharacterFilterState[T],
) => void;

interface IFormState {
  form: ICharacterFilterState;
  changeField: ChangeFieldType;
  setForm: React.Dispatch<React.SetStateAction<ICharacterFilterState>>;
}

const initialValues: IFormState = {
  form: initialState.filter,
  changeField: () => null,
  setForm: () => null,
};

export const CharFormContext = createContext(initialValues);
export const CharFormProvider = ({children}: {children: React.ReactNode}) => {
  const [form, setForm] = useState(initialState.filter || {});

  const changeField: ChangeFieldType = (fieldName, value) => {
    setForm({...form, [fieldName]: value});
  };

  return (
    <CharFormContext.Provider
      value={{
        form,
        setForm,
        changeField,
      }}>
      {children}
    </CharFormContext.Provider>
  );
};
