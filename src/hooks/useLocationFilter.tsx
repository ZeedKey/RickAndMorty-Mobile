import {LocationContext, LocationFormContext} from '@store';
import {useContext} from 'react';

export const useLocationFilter = () => {
  const {setFilter, filter} = useContext(LocationContext);
  const {form, setForm} = useContext(LocationFormContext);

  const resetFilter = () => {
    setFilter({});
    setForm({});
  };

  return {
    filter,
    setFilter,
    form,
    setForm,
    reset: resetFilter,
  };
};
