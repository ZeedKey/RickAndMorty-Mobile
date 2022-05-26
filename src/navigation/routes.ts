import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  EpisodeScreen = 'Episodes',
  CharacterScreen = 'Characters',
  LocationScreen = 'Locations',

  EpisodeStack = 'EpisodesStak',
  CharacterStack = 'CharactersStak',
  LocationStack = 'LocationsStak',

  MainNavigator = 'MainNavigator',

  CharacterDetails = 'CharacterDetails',
  EpisodeDetails = 'EpisodeDetails',
  LocationDetails = 'LocationDetails',

  CharacterFilter = 'CharacterFilter',
  LocationFilter = 'LocationFilter',
  EpisodeFilter = 'EpisodeFilter',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
