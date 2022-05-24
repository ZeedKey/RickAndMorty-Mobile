import {CharFormContext, ICharacterFilterState} from '@store';
import {Multioption, Section as Option} from '@ui/common';
import React, {useContext} from 'react';

export const GenderOptions: React.FC = () => {
  const {form, setForm} = useContext(CharFormContext);

  const onPress = (name: keyof ICharacterFilterState) => {
    if (!form.isAnyGenderChoosed || form[name]) {
      setForm({
        ...form,
        isAnyGenderChoosed: !form.isAnyGenderChoosed,
        [name]: !form[name],
      });
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
