import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {LocationScreen} from '@screens';
import {LocationDetails} from 'src/screens/location/details';

const Location = createNativeStackNavigator();

export const LocationStack = () => {
  return (
    <Location.Navigator
      initialRouteName={Routes.LocationScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Location.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
      />
      <Location.Screen
        name={Routes.LocationDetails}
        component={LocationDetails}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Location.Navigator>
  );
};
