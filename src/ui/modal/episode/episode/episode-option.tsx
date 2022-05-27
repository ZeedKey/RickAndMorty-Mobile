import {EpisodeFormContext} from '@store';
import {Option} from '@ui/common';
import React, {useContext} from 'react';

interface INameOptionProps {
  onPress: () => void;
}

export const EpisodeOption: React.FC<INameOptionProps> = ({onPress}) => {
  const {form} = useContext(EpisodeFormContext);
  
  return (
    <Option
      title="Episode"
      body="Select one"
      isActive={!!form.episode}
      onPress={onPress}
    />
  );
};
