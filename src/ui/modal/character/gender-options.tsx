import {Multioption} from '@ui/common';
import React from 'react';
import {CharacterOption as Option} from './character-option';

export const GenderOptions: React.FC = () => {
  return (
    <Multioption title="Gender">
      <Option label="Female" name="isFemale" />
      <Option label="Male" name="isMale" />
      <Option label="Genderless" name="isGenderless" />
      <Option label="Unknown" name="isGenderUnknown" />
    </Multioption>
  );
};
