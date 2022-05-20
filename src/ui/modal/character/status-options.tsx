import {Multioption} from '@ui/common';
import React from 'react';
import {CharacterOption as Option} from './character-option';

export const StatusOptions: React.FC = () => {
  return (
    <Multioption title="Status">
      <Option label="Alive" name="isAlive" />
      <Option label="Dead" name="isDead" />
      <Option label="Unknown" name="isUnknown" />
    </Multioption>
  );
};
