import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  uri: 'https://gwc-walmart-challenge.vercel.app/graphql',
  cache: new InMemoryCache()
})
