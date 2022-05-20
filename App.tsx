import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from 'src/navigation/root';
import {AlertProvider} from './src/modules/alert-context';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {CharacterProvider} from './src/store/character-store';
import {EpisodeProvider} from '@store';

const API_URL = 'https://rickandmortyapi.com/graphql';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        results: {
          merge: true,
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: API_URL,
  cache: cache,
});

export const App = () => {
  return (
    <EpisodeProvider>
      <CharacterProvider>
        <ApolloProvider client={client}>
          <AlertProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </AlertProvider>
        </ApolloProvider>
      </CharacterProvider>
    </EpisodeProvider>
  );
};
