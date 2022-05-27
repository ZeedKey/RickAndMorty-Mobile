import {CharFormContext} from '@store';
import {Multioption, Section as Option} from '@ui/common';
import React, {useContext} from 'react';
import {StatusEnum} from 'src/types';

export const StatusOptions: React.FC = () => {
  const {form, changeField} = useContext(CharFormContext);
  const onChange = (val: StatusEnum) => changeField('status', val);

  return (
    <Multioption title="Status">
      {Object.values(StatusEnum).map(e => (
        <Option
          label={e.charAt(0).toUpperCase() + e.slice(1)}
          isChecked={form.status === StatusEnum[e]}
          onPress={() => onChange(StatusEnum[e])}
        />
      ))}
    </Multioption>
  );
};
