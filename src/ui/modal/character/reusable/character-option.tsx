import {CharacterContext, ICharacterFilterState} from '@store';
import {Section} from '@ui/common';
import React, {useContext} from 'react';

interface ICharOptionProps {
  isActive: boolean;
  onPress: () => void;
  label: string;
}

export const CharacterOption: React.FC<ICharOptionProps> = ({
  label,
  isActive,
  onPress,
}) => {
  return <Section label={label} isActive={isActive} onPress={onPress} />;
};
