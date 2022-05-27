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
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.accent.indigo,
        tabBarInactiveTintColor: theme.colors.basic.gray,
      }}>
      <Tab.Screen
        name={Routes.CharacterStack}
        component={CharacterStack}
        options={{
          headerTitle: 'Characters',
          tabBarIcon: ({color}) => <GhostIcon color={color} />,
        }}
      />

      <Tab.Screen
        name={Routes.LocationStack}
        component={LocationStack}
        options={{
          headerTitle: 'Locations',
          tabBarIcon: ({color}) => <PlanetIcon color={color} />,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeStack}
        component={EpisodeStack}
        options={{
          headerTitle: 'Episodes',
          tabBarIcon: ({color}) => <TvIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
