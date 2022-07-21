
// the structure of the app (inside the document)

import '../styles/globals.css'

import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '../graphql/auth'
import client from '../graphql/client'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  )
}
