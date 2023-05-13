import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const token = ''

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.github.com/graphql',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  // link: link
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
