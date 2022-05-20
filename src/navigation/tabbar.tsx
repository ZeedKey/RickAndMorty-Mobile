import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from './routes';
import {GhostActive, GhostInactive} from 'src/ui/icons/ghost';
import {PlanetActive, PlanetInactive} from 'src/ui/icons/planet';
import {TvActive, TvInactive} from 'src/ui/icons/tv';
import {CharacterScreen} from '@screens';
import {CharacterStack} from './character-stack';

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
      {/* <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          tabBarIcon: ({ focused }) => focused ? <PlanetActive/> : <PlanetInactive/>,
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          headerTitle: 'Episode',
          tabBarIcon: ({ focused }) => focused ? <TvActive/> : <TvInactive/>,
        }}
      /> */}
    </Tab.Navigator>
  );
};
