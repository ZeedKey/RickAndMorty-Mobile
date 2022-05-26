import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {LocationScreen} from '@screens';
import {LocationDetails} from 'src/screens/location/details';
import {DetailsHeader} from '@ui/common';

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
          header: ({navigation, route}) => (
            <DetailsHeader title={''} onPress={() => console.log(route)} />
          ),
          headerShown: true,
        }}
      />
    </Location.Navigator>
  );
};
