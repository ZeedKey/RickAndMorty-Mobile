import {CharFormContext, ICharacterFilterState} from '@store';
import {Multioption} from '@ui/common';
import React, {useContext} from 'react';
import {CharacterOption as Option} from '../reusable/character-option';

export const StatusOptions: React.FC = () => {
  const {form, setForm} = useContext(CharFormContext);
  const onPress = (name: keyof ICharacterFilterState) => {
    setForm({...form, [name]: !form[name]});
  };
  return (
    <Multioption title="Status">
      <Option
        label="Alive"
        isActive={form.isAlive}
        onPress={() => onPress('isAlive')}
      />
      <Option
        label="Dead"
        isActive={form.isDead}
        onPress={() => onPress('isDead')}
      />
      <Option
        label="Unknown"
        isActive={form.isUnknown}
        onPress={() => onPress('isUnknown')}
      />
    </Multioption>
  );
};
