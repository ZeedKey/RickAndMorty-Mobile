import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {CharacterScreen} from '@screens';
import {CharacterDetails} from 'src/screens/character/details';
import {DetailsHeader} from '@ui/common';

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
          header: ({navigation}: NativeStackHeaderProps) => (
            <DetailsHeader onPress={() => navigation.goBack()} />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Character.Navigator>
  );
};
