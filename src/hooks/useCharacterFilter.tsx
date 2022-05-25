import {CharacterContext, CharFormContext} from '@store';
import {useContext} from 'react';

export const useCharacterFilter = () => {
  const {setFilter, filter} = useContext(CharacterContext);
  const {form, setForm} = useContext(CharFormContext);

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
