import React, {createContext, useState} from 'react';
import {ILocationFilterState, initialState} from '../location-store';

type ChangeFieldType = <T extends keyof ILocationFilterState>(
  fieldName: T,
  value: ILocationFilterState[T],
) => void;

interface IFormState {
  form: ILocationFilterState;
  changeField: ChangeFieldType;
  resetForm: () => void;
  setForm: React.Dispatch<React.SetStateAction<ILocationFilterState>>;
}

const initialValues: IFormState = {
  form: initialState.filter,
  changeField: () => null,
  setForm: () => null,
  resetForm: () => null,
};

export const LocationFormContext = createContext(initialValues);

export const LocationFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [form, setForm] = useState(initialValues.form);

  const changeField: ChangeFieldType = (fieldName, value) => {
    setForm({...form, [fieldName]: value});
  };
  const resetForm = () => {
    setForm(initialState.filter);
  };

  return (
    <LocationFormContext.Provider
      value={{
        form,
        setForm,
        changeField,
        resetForm,
      }}>
      {children}
    </LocationFormContext.Provider>
  );
};
