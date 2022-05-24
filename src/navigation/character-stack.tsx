import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes, useNavigation} from './routes';
import {CharacterScreen} from '@screens';
import {CharacterDetails} from 'src/screens/character/details';
import {BackButton} from '@ui/common';

const Character = createNativeStackNavigator();

export const CharacterStack = () => {
  const nav = useNavigation();
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
          headerLeft: () => (
            <BackButton onPress={() => nav.navigate(Routes.CharacterScreen)} />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Character.Navigator>
  );
};
