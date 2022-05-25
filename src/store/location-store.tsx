import React, {createContext, useState} from 'react';

export interface ILocationFilterState {
  name?: string;
  type?: string;
  dimension?: string;
}

const initialState: ILocationFilterState = {
  name: '',
  type: '',
  dimension: '',
};

export const LocationContext = createContext({
  filter: initialState,
  setFilter: (val: ILocationFilterState) => {},
});
export const LocationProvider = ({children}: {children: React.ReactNode}) => {
  const [filter, setFilter] = useState(initialState);
  return (
    <LocationContext.Provider
      value={{
        filter,
        setFilter,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
