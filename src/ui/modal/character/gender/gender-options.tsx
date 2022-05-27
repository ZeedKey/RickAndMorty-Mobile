import {GendersEnum} from 'src/types';
import {CharFormContext} from '@store';
import {Multioption, Section as Option} from '@ui/common';
import React, {useContext} from 'react';

export const GenderOptions: React.FC = () => {
  const {form, changeField} = useContext(CharFormContext);
  const onChange = (val: GendersEnum) => changeField('gender', val);

  return (
    <Multioption title="Gender">
      {Object.values(GendersEnum).map(e => (
        <Option
          label={e.charAt(0).toUpperCase() + e.slice(1)}
          isChecked={form.gender === GendersEnum[e]}
          onPress={() => onChange(GendersEnum[e])}
        />
      ))}
    </Multioption>
  );
};
