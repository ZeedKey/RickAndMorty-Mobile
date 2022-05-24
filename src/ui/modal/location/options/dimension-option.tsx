import {LocationFormContext} from '@store';
import {Option} from '@ui/common';
import React, {useContext} from 'react';

interface INameOptionProps {
  onPress: () => void;
}

export const LocDimensionOption: React.FC<INameOptionProps> = ({onPress}) => {
  const {form} = useContext(LocationFormContext);
  return (
    <Option
      title="Dimension"
      body="Select one"
      isActive={!!form.dimension}
      onPress={onPress}
    />
  );
};
