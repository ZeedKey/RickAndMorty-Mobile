import {GendersEnum} from '@models';
import {CharFormContext} from '@store';
import {Multioption, Section as Option} from '@ui/common';
import React, {useContext} from 'react';

export const GenderOptions: React.FC = () => {
  const {form, changeField} = useContext(CharFormContext);
  const onChange = (val: GendersEnum) => changeField('gender', val);

  return (
    <Multioption title="Gender">
      <Option
        label="Female"
        isChecked={form.gender === GendersEnum.female}
        onPress={() => onChange(GendersEnum.female)}
      />
      <Option
        label="Male"
        isChecked={form.gender === GendersEnum.male}
        onPress={() => onChange(GendersEnum.male)}
      />
      <Option
        label="Genderless"
        isChecked={form.gender === GendersEnum.genderless}
        onPress={() => onChange(GendersEnum.genderless)}
      />
      <Option
        last
        label="Unknown"
        isChecked={form.gender === GendersEnum.unknown}
        onPress={() => onChange(GendersEnum.unknown)}
      />
    </Multioption>
  );
};
