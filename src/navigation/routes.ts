import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  EpisodeScreen = 'Episodes',
  CharacterScreen = 'Characters',
  LocationScreen = 'Locations',

  EpisodeStack = 'Episodes',
  CharacterStack = 'Characters',
  LocationStack = 'Locations',

  MainNavigator = 'MainNavigator',

  CharacterDetails = 'CharacterDetails',
  EpisodeDetails = 'EpisodeDetails',
  LocationDetails = 'LocationDetails',

  CharacterFilter = 'CharacterFilter',
  LocationFilter = 'LocationFilter',
  EpisodeFilter = 'EpisodeFilter',

  Option = 'Option',
  NameOption = 'Name',
  SpeciesOption = 'Species',
  EpisodeNameOption = 'Name',
  EpisodeOption = 'Episode',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
