import React, {createContext, useState} from 'react';

export interface ILocationFilterState {
  name?: string;
  type?: string;
  dimension?: string;
}
export interface ILocationState {
  filter: ILocationFilterState;
  resetFilter: () => void;
  applyFilter: (form: ILocationFilterState) => void;
}

export const initialState: ILocationState = {
  filter: {
    name: '',
    type: '',
    dimension: '',
  },
  resetFilter: () => null,
  applyFilter: () => null,
};

export const LocationContext = createContext(initialState);
export const LocationProvider = ({children}: {children: React.ReactNode}) => {
  const [filter, setFilter] = useState(initialState.filter);

  const resetFilter = () => {
    setFilter(initialState.filter);
  };

  const applyFilter = (form: ILocationFilterState) => {
    setFilter(form);
  };

  return (
    <LocationContext.Provider
      value={{
        filter,
        applyFilter,
        resetFilter,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
