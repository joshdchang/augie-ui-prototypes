
// the structure of the app (inside the document)

import '../styles/globals.css'

import { ApolloProvider } from '@apollo/client'
import client from '../graphql/client'
import Layout from '../components/layout.jsx'

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
