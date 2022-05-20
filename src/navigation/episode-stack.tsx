import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from './routes';
import {CharacterScreen} from '@screens';
import {CharacterDetails} from 'src/screens/character/details';

const Episode = createNativeStackNavigator();

export const EpisodeStack = () => {
  return (
    <Episode.Navigator
      initialRouteName={Routes.EpisodeScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Episode.Screen name={Routes.EpisodeScreen} component={CharacterScreen} />
      <Episode.Screen
        name={Routes.EpisodeDetails}
        component={CharacterDetails}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Episode.Navigator>
  );
};
