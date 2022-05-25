import {LocationContext, LocationFormContext} from '@store';
import {useContext} from 'react';

export const useLocationFilter = () => {
  const {setFilter, filter} = useContext(LocationContext);
  const {form, setForm} = useContext(LocationFormContext);

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
