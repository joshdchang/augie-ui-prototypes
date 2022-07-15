import Header from './header.jsx'
import Footer from './footer.jsx'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}