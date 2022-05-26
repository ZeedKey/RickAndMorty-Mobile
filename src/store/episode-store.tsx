import React, {createContext, useState} from 'react';

export interface IEpisodeFilterState {
  name?: string;
  episode?: string;
}
export interface IEpisodeState {
  filter: IEpisodeFilterState;
  resetFilter: () => void;
  applyFilter: (form: IEpisodeFilterState) => void;
}

export const initialState: IEpisodeState = {
  filter: {
    name: '',
    episode: '',
  },
  resetFilter: () => null,
  applyFilter: () => null,
};

export const EpisodeContext = createContext(initialState);

export const EpisodeProvider = ({children}: {children: React.ReactNode}) => {
  const [filter, setFilter] = useState(initialState.filter);

  const applyFilter = (form: IEpisodeFilterState) => {
    setFilter(form);
  };

  const resetFilter = () => {
    setFilter(initialState.filter);
  };

  return (
    <EpisodeContext.Provider
      value={{
        filter,
        resetFilter,
        applyFilter,
      }}>
      {children}
    </EpisodeContext.Provider>
  );
};
