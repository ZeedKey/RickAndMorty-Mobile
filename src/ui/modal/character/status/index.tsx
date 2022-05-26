import {CharFormContext} from '@store';
import {Multioption, Section as Option} from '@ui/common';
import React, {useContext} from 'react';
import {StatusEnum} from '@models';

export const StatusOptions: React.FC = () => {
  const {form, changeField} = useContext(CharFormContext);
  const onChange = (val: StatusEnum) => changeField('status', val);

  return (
    <Multioption title="Status">
      <Option
        label="Alive"
        isChecked={form.status === StatusEnum.alive}
        onPress={() => onChange(StatusEnum.alive)}
      />
      <Option
        label="Dead"
        isChecked={form.status === StatusEnum.dead}
        onPress={() => onChange(StatusEnum.dead)}
      />
      <Option
        last
        label="Unknown"
        isChecked={form.status === StatusEnum.unknown}
        onPress={() => onChange(StatusEnum.unknown)}
      />
    </Multioption>
  );
};
