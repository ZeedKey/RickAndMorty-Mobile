import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes, useNavigation} from './routes';
import {LocationScreen} from '@screens';
import {LocationDetails} from 'src/screens/location/details';
import {BackButton} from '@ui/common';

const Location = createNativeStackNavigator();

export const LocationStack = () => {
  const nav = useNavigation();
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
          headerShown: true,
          headerLeft: () => <BackButton onPress={() => nav.goBack()} />,
          headerTitleAlign: 'center',
        }}
      />
    </Location.Navigator>
  );
};
