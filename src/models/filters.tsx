import { Character, Location, Episode } from 'src/schemas/generated'

export interface ICharacterFilter {
  character?: Character
  location?: Location
  episode?: Episode
}
