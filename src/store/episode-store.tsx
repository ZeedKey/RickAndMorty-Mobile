import React, {createContext, useState} from 'react';

export interface IEpisodeFilterState {
  name: string;
  episode: string;
  isApplied: boolean;
  isAnyChoosed: boolean;
}

const initialState: IEpisodeFilterState = {
  name: '',
  episode: '',
  isApplied: false,
  isAnyChoosed: false,
};

export const EpisodeContext = createContext({
  filter: initialState,
  setFilter: (val: IEpisodeFilterState) => {},
});
export const EpisodeProvider = ({children}: {children: React.ReactNode}) => {
  const [filter, setFilter] = useState(initialState);
  return (
    <EpisodeContext.Provider
      value={{
        filter,
        setFilter,
      }}>
      {children}
    </EpisodeContext.Provider>
  );
};
