import {CharacterContext, ICharacterFilterState} from '@store';
import {Section} from '@ui/common';
import React, {useContext} from 'react';

interface ICharOptionProps {
  isChecked: boolean;
  onPress: () => void;
  label: string;
}

export const CharacterOption: React.FC<ICharOptionProps> = ({
  label,
  isChecked,
  onPress,
}) => {
  return <Section label={label} isChecked={isChecked} onPress={onPress} />;
};
