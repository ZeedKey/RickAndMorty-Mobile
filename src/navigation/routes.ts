import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  EpisodeScreen = 'Episodes',
  CharacterScreen = 'Characters',
  LocationScreen = 'Locations',
  MainNavigator = 'MainNavigator',
  CharacterDetailsScreen = 'CharacterDetailsScreen',
  EpisodeDetailsScreen = 'EpisodeDetailsScreen',
  LocationDetailsScreen = 'LocationDetailsScreen',
  Filter = 'Filter',
  Option = 'Option',
  NameOption = 'Name',
  SpeciesOption = 'Species',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
