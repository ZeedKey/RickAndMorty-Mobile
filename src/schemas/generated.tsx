import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender: Maybe<Scalars['String']>;
  /** The id of the character. */
  id: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: Maybe<Scalars['String']>;
  /** The character's last known location */
  location: Maybe<Location>;
  /** The name of the character. */
  name: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin: Maybe<Location>;
  /** The species of the character. */
  species: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode: Maybe<Scalars['String']>;
  /** The id of the episode. */
  id: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  species: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension: Maybe<Scalars['String']>;
  /** The id of the location. */
  id: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character: Maybe<Character>;
  /** Get the list of all characters */
  characters: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location: Maybe<Location>;
  /** Get the list of all locations */
  locations: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  filter: InputMaybe<FilterCharacter>;
  page: InputMaybe<Scalars['Int']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  filter: InputMaybe<FilterEpisode>;
  page: InputMaybe<Scalars['Int']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  filter: InputMaybe<FilterLocation>;
  page: InputMaybe<Scalars['Int']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type GetCharactersByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCharactersByIdQuery = { __typename?: 'Query', character: { __typename?: 'Character', id: string, status: string, name: string, image: string, species: string, gender: string, type: string, origin: { __typename?: 'Location', name: string }, location: { __typename?: 'Location', name: string }, episode: Array<{ __typename?: 'Episode', id: string, name: string, air_date: string, episode: string }> } };

export type GetCharactersQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
  species: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
}>;


export type GetCharactersQuery = { __typename?: 'Query', characters: { __typename?: 'Characters', info: { __typename?: 'Info', pages: number, next: number }, results: Array<{ __typename?: 'Character', id: string, status: string, name: string, image: string }> } };

export type GetEpisodeByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetEpisodeByIdQuery = { __typename?: 'Query', episode: { __typename?: 'Episode', id: string, name: string, episode: string, air_date: string, characters: Array<{ __typename?: 'Character', id: string, name: string, status: string, image: string }> } };

export type GetEpisodesQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
}>;


export type GetEpisodesQuery = { __typename?: 'Query', episodes: { __typename?: 'Episodes', info: { __typename?: 'Info', pages: number, next: number }, results: Array<{ __typename?: 'Episode', id: string, name: string, episode: string, air_date: string }> } };

export type GetLocationByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLocationByIdQuery = { __typename?: 'Query', location: { __typename?: 'Location', id: string, name: string, type: string, dimension: string, residents: Array<{ __typename?: 'Character', id: string, status: string, name: string, image: string }> } };

export type GetLocationsQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
  page: InputMaybe<Scalars['Int']>;
}>;


export type GetLocationsQuery = { __typename?: 'Query', locations: { __typename?: 'Locations', info: { __typename?: 'Info', pages: number, next: number }, results: Array<{ __typename?: 'Location', id: string, name: string, type: string }> } };


export const GetCharactersByIdDocument = gql`
    query getCharactersById($id: ID!) {
  character(id: $id) {
    id
    status
    name
    image
    species
    gender
    origin {
      name
    }
    type
    location {
      name
    }
    episode {
      id
      name
      air_date
      episode
    }
  }
}
    `;

/**
 * __useGetCharactersByIdQuery__
 *
 * To run a query within a React component, call `useGetCharactersByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharactersByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCharactersByIdQuery, GetCharactersByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersByIdQuery, GetCharactersByIdQueryVariables>(GetCharactersByIdDocument, options);
      }
export function useGetCharactersByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersByIdQuery, GetCharactersByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersByIdQuery, GetCharactersByIdQueryVariables>(GetCharactersByIdDocument, options);
        }
export type GetCharactersByIdQueryHookResult = ReturnType<typeof useGetCharactersByIdQuery>;
export type GetCharactersByIdLazyQueryHookResult = ReturnType<typeof useGetCharactersByIdLazyQuery>;
export type GetCharactersByIdQueryResult = Apollo.QueryResult<GetCharactersByIdQuery, GetCharactersByIdQueryVariables>;
export const GetCharactersDocument = gql`
    query getCharacters($name: String, $species: String, $page: Int) {
  characters(page: $page, filter: {name: $name, species: $species}) {
    info {
      pages
      next
    }
    results {
      id
      status
      name
      image
    }
  }
}
    `;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      name: // value for 'name'
 *      species: // value for 'species'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions?: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetEpisodeByIdDocument = gql`
    query getEpisodeById($id: ID!) {
  episode(id: $id) {
    id
    name
    episode
    air_date
    characters {
      id
      name
      status
      image
    }
  }
}
    `;

/**
 * __useGetEpisodeByIdQuery__
 *
 * To run a query within a React component, call `useGetEpisodeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEpisodeByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>(GetEpisodeByIdDocument, options);
      }
export function useGetEpisodeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>(GetEpisodeByIdDocument, options);
        }
export type GetEpisodeByIdQueryHookResult = ReturnType<typeof useGetEpisodeByIdQuery>;
export type GetEpisodeByIdLazyQueryHookResult = ReturnType<typeof useGetEpisodeByIdLazyQuery>;
export type GetEpisodeByIdQueryResult = Apollo.QueryResult<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>;
export const GetEpisodesDocument = gql`
    query getEpisodes($name: String, $page: Int) {
  episodes(page: $page, filter: {name: $name}) {
    info {
      pages
      next
    }
    results {
      id
      name
      episode
      air_date
    }
  }
}
    `;

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *      name: // value for 'name'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
      }
export function useGetEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
        }
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<typeof useGetEpisodesLazyQuery>;
export type GetEpisodesQueryResult = Apollo.QueryResult<GetEpisodesQuery, GetEpisodesQueryVariables>;
export const GetLocationByIdDocument = gql`
    query getLocationById($id: ID!) {
  location(id: $id) {
    id
    name
    type
    dimension
    residents {
      id
      status
      name
      image
    }
  }
}
    `;

/**
 * __useGetLocationByIdQuery__
 *
 * To run a query within a React component, call `useGetLocationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLocationByIdQuery(baseOptions: Apollo.QueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(GetLocationByIdDocument, options);
      }
export function useGetLocationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(GetLocationByIdDocument, options);
        }
export type GetLocationByIdQueryHookResult = ReturnType<typeof useGetLocationByIdQuery>;
export type GetLocationByIdLazyQueryHookResult = ReturnType<typeof useGetLocationByIdLazyQuery>;
export type GetLocationByIdQueryResult = Apollo.QueryResult<GetLocationByIdQuery, GetLocationByIdQueryVariables>;
export const GetLocationsDocument = gql`
    query getLocations($name: String, $page: Int) {
  locations(page: $page, filter: {name: $name}) {
    info {
      pages
      next
    }
    results {
      id
      name
      type
    }
  }
}
    `;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetLocationsQuery(baseOptions?: Apollo.QueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
      }
export function useGetLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationsQuery, GetLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(GetLocationsDocument, options);
        }
export type GetLocationsQueryHookResult = ReturnType<typeof useGetLocationsQuery>;
export type GetLocationsLazyQueryHookResult = ReturnType<typeof useGetLocationsLazyQuery>;
export type GetLocationsQueryResult = Apollo.QueryResult<GetLocationsQuery, GetLocationsQueryVariables>;