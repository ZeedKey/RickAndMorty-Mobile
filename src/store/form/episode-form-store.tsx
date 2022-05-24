import React, {createContext, useState} from 'react';
import {IEpisodeFilterState} from '../episode-store';

const initialState: IEpisodeFilterState = {
  name: '',
  episode: '',
};

export const EpisodeFormContext = createContext({
  form: initialState,
  setForm: (val: IEpisodeFilterState) => {},
});

export const EpisodeFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [form, setForm] = useState(initialState);
  return (
    <EpisodeFormContext.Provider
      value={{
        form,
        setForm,
      }}>
      {children}
    </EpisodeFormContext.Provider>
  );
};
