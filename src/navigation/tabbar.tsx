import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from './routes';
import {GhostActive, GhostInactive} from 'src/ui/icons/ghost';
import {PlanetActive, PlanetInactive} from 'src/ui/icons/planet';
import {TvActive, TvInactive} from 'src/ui/icons/tv';
import {CharacterScreen, EpisodeScreen, LocationScreen} from '@screens';
import {CharacterStack} from './character-stack';
import {LocationStack} from './location-stack';
import {EpisodeStack} from './episode-stack';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.CharacterStack}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Routes.CharacterStack}
        component={CharacterStack}
        options={{
          headerTitle: 'Characters',
          tabBarIcon: ({focused}) =>
            focused ? <GhostActive /> : <GhostInactive />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationStack}
        component={LocationStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <PlanetActive /> : <PlanetInactive />,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeStack}
        component={EpisodeStack}
        options={{
          headerTitle: 'Episode',
          tabBarIcon: ({focused}) => (focused ? <TvActive /> : <TvInactive />),
        }}
      />
    </Tab.Navigator>
  );
};
