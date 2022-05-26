import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from './routes';
import {EpisodeScreen} from '@screens';
import {} from 'src/screens/character/details';
import {EpisodeDetails} from 'src/screens/episode/details';
import {DetailsHeader} from '@ui/common';
import {NavigationProps} from '@models';

const Episode = createNativeStackNavigator();

export const EpisodeStack = () => {
  return (
    <Episode.Navigator
      initialRouteName={Routes.EpisodeScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Episode.Screen name={Routes.EpisodeScreen} component={EpisodeScreen} />
      <Episode.Screen
        name={Routes.EpisodeDetails}
        component={EpisodeDetails}
        options={{
          headerShown: true,
          header: ({navigation, route}: NavigationProps) => (
            <DetailsHeader
              title={route.params.name}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Episode.Navigator>
  );
};
