import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { typeDefs } from './query';

const cache = new InMemoryCache();
const link = withClientState({
      cache,
      typeDefs,
      defaults: {
            allItems: ['nachos', 'burritos', 'hot dog'],
      },
})

export const client = new ApolloClient({
      cache,
      link
})