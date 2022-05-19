import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAlertContext} from 'src/modules/alert-context';

import {Routes} from './routes';
import {TabBar} from './tabbar';
import {useNavigation} from '@react-navigation/native';
import {ApplyButton, BackButton} from '@ui/common';
import {LocationList} from 'src/ui/details/location/location-list';
import {EpisodeList} from 'src/ui/details/episode/episode-list';
import {CharacterList} from 'src/ui/details/character/character-list';
import {CharacterFilterLayout} from 'src/screens';
import {NameOption} from 'src/ui/filter/option/name';
import {SpeciesOption} from 'src/ui/filter/option/species';
const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  const {visible} = useAlertContext();
  const nav = useNavigation();
  const handleGoBack = () => nav.goBack();

  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerLeft: () => <BackButton onPress={handleGoBack} />,
        }}
        initialRouteName={Routes.MainNavigator}>
        <Stack.Screen
          name={Routes.MainNavigator}
          options={{headerShown: false}}
          component={TabBar}
        />
        <Stack.Screen
          name={Routes.CharacterDetailsScreen}
          component={CharacterList}
        />
        <Stack.Screen
          name={Routes.LocationDetailsScreen}
          component={LocationList}
        />
        <Stack.Screen
          name={Routes.EpisodeDetailsScreen}
          component={EpisodeList}
        />
        <Stack.Screen
          name={Routes.NameOption}
          component={NameOption}
          options={{
            headerRight: () => <ApplyButton onPress={handleGoBack} />,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name={Routes.SpeciesOption}
          component={SpeciesOption}
          options={{
            headerRight: () => <ApplyButton onPress={handleGoBack} />,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name={Routes.Filter}
          component={CharacterFilterLayout}
          options={{
            headerRight: () => <ApplyButton onPress={handleGoBack} />,
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
};
