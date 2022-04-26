import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl1eg15wl20l801z6brhk2nff/master',
  cache: new InMemoryCache(),
});
