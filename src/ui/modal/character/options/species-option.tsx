import {CharFormContext} from '@store';
import {Option} from '@ui/common';
import React, {useContext} from 'react';

interface ISpeciesOptionProps {
  onPress: () => void;
}

export const SpeciesOption: React.FC<ISpeciesOptionProps> = ({onPress}) => {
  const {form} = useContext(CharFormContext);
  return (
    <Option
      title="Species"
      body="Enter species"
      isActive={!!form.species}
      onPress={onPress}
    />
  );
};
