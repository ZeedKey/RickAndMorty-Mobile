import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';

const Location = createNativeStackNavigator();

export const LocationStack = () => {
  return (
    <Location.Navigator initialRouteName={Routes.LocationScreen}>
      <Location.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{header: () => <FilterLocations />}}
      />
      <Location.Screen
        name={Routes.DetailedLocation}
        component={DetailedLocation}
        options={{
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton />,
        }}
      />
    </Location.Navigator>
  );
};
