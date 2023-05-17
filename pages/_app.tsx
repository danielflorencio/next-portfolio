import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app'
// const dotenv = require('dotenv')
import '../styles/globals.css'
// dotenv.config()

const token = ""

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