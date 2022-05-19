import {CharacterContext} from '@store';
import {basic} from '@theme';
import {Option} from '@ui/common';
import React, {useContext} from 'react';
import {Routes, useNavigation} from 'src/navigation/routes';
import styled from 'styled-components/native';
import {GenderOptions} from './gender-options';
import {StatusOptions} from './status-options';

export const CharacterFilterUi: React.FC = () => {
  const nav = useNavigation();
  const handleTo = (name: string) => nav.navigate(name);
  const {filter} = useContext(CharacterContext);

  return (
    <Box>
      <Option
        title="Name"
        body="Give a name"
        isActive={!!filter.name}
        onPress={() => handleTo(Routes.NameOption)}
      />
      <Option
        title="Species"
        body="Enter species"
        isActive={!!filter.species}
        onPress={() => handleTo(Routes.SpeciesOption)}
      />

      <StatusOptions />
      <GenderOptions />
    </Box>
  );
};

const Box = styled.View`
  background-color: ${basic.white};
`;
