import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from './routes';
import {CharacterStack} from './character-stack';
import {LocationStack} from './location-stack';
import {EpisodeStack} from './episode-stack';
import {GhostIcon, PlanetIcon, TvIcon} from '@ui/icons';
import {theme} from '@theme';

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
            focused ? (
              <GhostIcon />
            ) : (
              <GhostIcon color={theme.colors.basic.gray} />
            ),
        }}
      />

      <Tab.Screen
        name={Routes.LocationStack}
        component={LocationStack}
        options={{
          headerTitle: 'Locations',
          tabBarIcon: ({focused}) =>
            focused ? (
              <PlanetIcon />
            ) : (
              <PlanetIcon color={theme.colors.basic.gray} />
            ),
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeStack}
        component={EpisodeStack}
        options={{
          headerTitle: 'Episodes',
          tabBarIcon: ({focused}) =>
            focused ? <TvIcon /> : <TvIcon color={theme.colors.basic.gray} />,
        }}
      />
    </Tab.Navigator>
  );
};
