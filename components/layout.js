
// the universal layout of the app (inside the app)

import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}