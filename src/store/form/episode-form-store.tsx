import React, {createContext, useState} from 'react';
import {IEpisodeFilterState, initialState} from '../episode-store';

type ChangeFieldType = <T extends keyof IEpisodeFilterState>(
  fieldName: T,
  value: IEpisodeFilterState[T],
) => void;

interface IFormState {
  form: IEpisodeFilterState;
  changeField: ChangeFieldType;
  resetForm: () => void;
  setForm: React.Dispatch<React.SetStateAction<IEpisodeFilterState>>;
}

const initialValues: IFormState = {
  form: initialState.filter,
  changeField: () => null,
  setForm: () => null,
  resetForm: () => null,
};

export const EpisodeFormContext = createContext(initialValues);

export const EpisodeFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [form, setForm] = useState(initialValues.form || {});

  const changeField: ChangeFieldType = (fieldName, value) => {
    setForm({...form, [fieldName]: value});
  };
  const resetForm = () => {
    setForm(initialState.filter);
  };

  return (
    <EpisodeFormContext.Provider
      value={{
        form,
        setForm,
        changeField,
        resetForm,
      }}>
      {children}
    </EpisodeFormContext.Provider>
  );
};
