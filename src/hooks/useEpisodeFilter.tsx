import {EpisodeContext, EpisodeFormContext} from '@store';
import {useContext} from 'react';

export const useEpisodeFilter = () => {
  const {setFilter, filter} = useContext(EpisodeContext);
  const {form, setForm} = useContext(EpisodeFormContext);

  const resetFilter = () => {
    setFilter({});
    setForm({});
  };

  return {
    filter,
    setFilter,
    form,
    setForm,
    reset: () => resetFilter(),
  };
};
