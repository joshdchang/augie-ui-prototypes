import '../styles/globals.css'

import Layout from '../components/layout.jsx'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
