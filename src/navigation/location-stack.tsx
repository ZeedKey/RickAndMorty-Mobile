import React from 'react';
import {createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack';
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
          header: ({navigation}: NativeStackHeaderProps) => (
            <DetailsHeader onPress={() => navigation.goBack()} />
          ),
          headerShown: true,
        }}
      />
    </Location.Navigator>
  );
};
