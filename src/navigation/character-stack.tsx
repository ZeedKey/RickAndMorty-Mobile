import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes, useNavigation} from './routes';
import {CharacterScreen} from '@screens';
import {CharacterDetails} from 'src/screens/character/details';
import {DetailsHeader} from '@ui/common';
import {NavigationProps} from '@models';

const Character = createNativeStackNavigator();

export const CharacterStack = () => {
  return (
    <Character.Navigator
      initialRouteName={Routes.CharacterScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Character.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
      />
      <Character.Screen
        name={Routes.CharacterDetails}
        component={CharacterDetails}
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
    </Character.Navigator>
  );
};
