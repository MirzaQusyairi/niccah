import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://niccah.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'hVjrAiTeNWy1OmuZi6xwWDizH7686g4V9jU2KXSebdJ22Cyu3NZSk6CgL1uugRyO'
  },
});

export default client