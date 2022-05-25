import {
  FilterCharacter,
  FilterEpisode,
  FilterLocation,
} from 'src/schemas/generated';

export const getAnyChoosed = (filter: Record<string, any>) =>
  Object.values(filter).some(item => item);
