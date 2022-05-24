import React, {createContext, useState} from 'react';
import {ILocationFilterState} from '../location-store';

const initialState: ILocationFilterState = {
  name: '',
  type: '',
  dimension: '',
};

export const LocationFormContext = createContext({
  form: initialState,
  setForm: (val: ILocationFilterState) => {},
});

export const LocationFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [form, setForm] = useState(initialState);
  return (
    <LocationFormContext.Provider
      value={{
        form,
        setForm,
      }}>
      {children}
    </LocationFormContext.Provider>
  );
};
