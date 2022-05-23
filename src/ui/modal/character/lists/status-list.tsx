import {CharFormContext, ICharacterFilterState} from '@store';
import {Multioption} from '@ui/common';
import React, {useContext, useState} from 'react';
import {CharacterOption as Option} from '../reusable/character-option';

export const StatusOptions: React.FC = () => {
  const {form, setForm} = useContext(CharFormContext);

  const onPress = (name: keyof ICharacterFilterState) => {
    if (!form.isAnyStatusChoosed || form[name]) {
      setForm({
        ...form,
        isAnyStatusChoosed: !form.isAnyStatusChoosed,
        [name]: !form[name],
      });
    }
  };

  return (
    <Multioption title="Status">
      <Option
        label="Alive"
        isChecked={form.isAlive}
        onPress={() => onPress('isAlive')}
      />
      <Option
        label="Dead"
        isChecked={form.isDead}
        onPress={() => onPress('isDead')}
      />
      <Option
        label="Unknown"
        isChecked={form.isUnknown}
        onPress={() => onPress('isUnknown')}
      />
    </Multioption>
  );
};
