import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from './routes';
import {CharacterScreen} from '@screens';
import {CharacterDetails} from 'src/screens/character/details';

const Character = createNativeStackNavigator();

export const CharacterStack = () => {
  return (
    <Character.Navigator
      initialRouteName={Routes.CharacterScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Character.Group>
        <Character.Screen
          name={Routes.CharacterScreen}
          component={CharacterScreen}
        />
        <Character.Screen
          name={Routes.CharacterDetails}
          component={CharacterDetails}
          options={{
            headerTitleAlign: 'center',
          }}
        />
      </Character.Group>
    </Character.Navigator>
  );
};
