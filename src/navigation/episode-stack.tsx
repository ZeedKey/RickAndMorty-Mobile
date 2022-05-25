import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes, useNavigation} from './routes';
import {EpisodeScreen} from '@screens';
import {} from 'src/screens/character/details';
import {EpisodeDetails} from 'src/screens/episode/details';
import {BackButton} from '@ui/common';

const Episode = createNativeStackNavigator();

export const EpisodeStack = () => {
  const nav = useNavigation();
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
          headerLeft: () => (
            <BackButton onPress={() => nav.goBack()} />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Episode.Navigator>
  );
};
