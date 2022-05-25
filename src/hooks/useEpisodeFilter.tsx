import {EpisodeContext, EpisodeFormContext} from '@store';
import {useContext} from 'react';

export const useEpisodeFilter = () => {
  const {setFilter, filter} = useContext(EpisodeContext);
  const {form, setForm} = useContext(EpisodeFormContext);

  const onClearPressed = () => {
    setFilter({});
    setForm({});
  };
  return {
    filter: filter,
    setFilter: setFilter,
    form: form,
    setForm: setForm,
    reset: () => onClearPressed(),
  };
};
