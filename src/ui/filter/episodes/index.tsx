import {EpisodeContext} from '@store';
import {basic} from '@theme';
import {Option} from '@ui/common';
import React, {useContext} from 'react';
import {Routes, useNavigation} from 'src/navigation/routes';
import styled from 'styled-components/native';

export const EpisodeFilter: React.FC = () => {
  const nav = useNavigation();
  const handleTo = (name: string) => nav.navigate(name);
  const {filter} = useContext(EpisodeContext);

  return (
    <Box>
      <Option
        title="Name"
        body="Give a name"
        isActive={!!filter.name}
        onPress={() => handleTo(Routes.NameOption)}
      />
      <Option
        title="Episode"
        body="Select one"
        isActive={!!filter.episode}
        onPress={() => handleTo(Routes.SpeciesOption)}
      />
    </Box>
  );
};

const Box = styled.View`
  background-color: ${basic.white};
`;
