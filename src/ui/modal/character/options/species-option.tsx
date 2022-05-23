import {Option} from '@ui/common';
import React from 'react';

interface ISpeciesOptionProps {
  isActive: boolean;
  onPress: () => void;
}

export const SpeciesOption: React.FC<ISpeciesOptionProps> = ({
  isActive,
  onPress,
}) => {
  return (
    <Option
      title="Species"
      body="Enter species"
      isActive={isActive}
      onPress={onPress}
    />
  );
};
