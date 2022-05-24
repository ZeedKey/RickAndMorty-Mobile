import {LocationFormContext} from '@store';
import {Option} from '@ui/common';
import React, {useContext} from 'react';

interface INameOptionProps {
  onPress: () => void;
}

export const LocTypeOption: React.FC<INameOptionProps> = ({onPress}) => {
  const {form} = useContext(LocationFormContext);
  return (
    <Option
      title="Type"
      body="Select one"
      isActive={!!form.type}
      onPress={onPress}
    />
  );
};
