import {LocationFormContext} from '@store';
import {Option} from '@ui/common';
import React, {useContext} from 'react';

interface INameOptionProps {
  onPress: () => void;
}

export const LocNameOption: React.FC<INameOptionProps> = ({onPress}) => {
  const {form} = useContext(LocationFormContext);
  return (
    <Option
      title="Name"
      body="Give a name"
      isActive={!!form.name}
      onPress={onPress}
    />
  );
};
