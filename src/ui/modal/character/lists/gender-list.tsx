import {ICharacterFilter} from '@models';
import {CharFormContext, ICharacterFilterState} from '@store';
import {Multioption} from '@ui/common';
import React, {useContext} from 'react';
import {CharacterOption as Option} from '../reusable/character-option';

export const GenderOptions: React.FC = () => {
  const {form, setForm} = useContext(CharFormContext);
  const onPress = (name: keyof ICharacterFilterState) => {
    setForm({...form, [name]: !form[name]});
  };
  return (
    <Multioption title="Gender">
      <Option
        label="Female"
        isActive={form.isFemale}
        onPress={() => onPress('isFemale')}
      />
      <Option
        label="Male"
        isActive={form.isMale}
        onPress={() => onPress('isMale')}
      />
      <Option
        label="Genderless"
        isActive={form.isGenderless}
        onPress={() => onPress('isGenderless')}
      />
      <Option
        label="Unknown"
        isActive={form.isGenderUnknown}
        onPress={() => onPress('isUnknown')}
      />
    </Multioption>
  );
};
