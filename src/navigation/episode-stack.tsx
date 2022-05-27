import React from 'react';
import {createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {EpisodeScreen} from '@screens';
import {EpisodeDetails} from 'src/screens/episode/details';
import {DetailsHeader} from '@ui/common';

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
          header: ({navigation}: NativeStackHeaderProps) => (
            <DetailsHeader onPress={() => navigation.goBack()} />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Episode.Navigator>
  );
};
