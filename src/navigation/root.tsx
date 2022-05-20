import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {TabBar} from './tabbar';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.MainNavigator}>
        <Stack.Screen name={Routes.MainNavigator} component={TabBar} />
      </Stack.Navigator>
    </React.Fragment>
  );
};
