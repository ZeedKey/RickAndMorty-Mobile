import {CharacterContext, CharFormContext} from '@store';
import {useContext} from 'react';

export const useCharacterFilter = () => {
  const {setFilter, filter} = useContext(CharacterContext);
  const {form, setForm} = useContext(CharFormContext);

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
