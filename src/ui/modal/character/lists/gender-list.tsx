import {ICharacterFilter} from '@models';
import {CharFormContext, ICharacterFilterState} from '@store';
import {Multioption} from '@ui/common';
import React, {useContext, useState} from 'react';
import {CharacterOption as Option} from '../reusable/character-option';

export const GenderOptions: React.FC = () => {
  const {form, setForm} = useContext(CharFormContext);
  const [selectCounter, setSelectCounter] = useState<number>(0);

  const onPress = (name: keyof ICharacterFilterState) => {
    if (!selectCounter) {
      setForm({...form, [name]: !form[name]});
      setSelectCounter(selectCounter + 1);
    } else {
      if (form[name]) {
        setForm({...form, [name]: !form[name]});
        setSelectCounter(selectCounter - 1);
      }
    }
  };
  return (
    <Multioption title="Gender">
      <Option
        label="Female"
        isChecked={form.isFemale}
        onPress={() => onPress('isFemale')}
      />
      <Option
        label="Male"
        isChecked={form.isMale}
        onPress={() => onPress('isMale')}
      />
      <Option
        label="Genderless"
        isChecked={form.isGenderless}
        onPress={() => onPress('isGenderless')}
      />
      <Option
        label="Unknown"
        isChecked={form.isGenderUnknown}
        onPress={() => onPress('isGenderUnknown')}
      />
    </Multioption>
  );
};
