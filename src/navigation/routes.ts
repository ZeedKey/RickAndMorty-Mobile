import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native'

export enum Routes {
  EpisodeScreen = 'Episodes',
  CharacterScreen = 'Characters',
  LocationScreen = 'Locations',

  EpisodeStack = 'EpisodesStack',
  CharacterStack = 'CharactersStack',
  LocationStack = 'LocationsStack',

  MainNavigator = 'MainNavigator',

  CharacterDetails = 'CharacterDetails',
  EpisodeDetails = 'EpisodeDetails',
  LocationDetails = 'LocationDetails',

  Filter = 'Filter',
  Option = 'Option',
  NameOption = 'Name',
  SpeciesOption = 'Species',
  EpisodeNameOption = 'Name',
  EpisodeOption = 'Episode',
}

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<Record<string, unknown>, Routes>>()
