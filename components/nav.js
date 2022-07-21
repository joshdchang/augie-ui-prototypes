
import Link from 'next/link'

// local components
const NavContainer = ({ children }) => (
  <div className="grid gap-8 grid-flow-col justify-start p-8 px-24">
    {children}
  </div>
)
const NavItem = ({ children, href }) => (
  <Link href={href}>
    <a className="text-slate-300 hover:text-white transition-colors text-lg">
      {children}
    </a>
  </Link>
)

export default function Nav() {

  // data
  const navLinks = [
    {
      name: 'Login',
      href: '/login'
    },
    {
      name: 'Learn More',
      href: '/about'
    },
    {
      name: 'Examples',
      href: '/examples'
    },
  ]

  return (
    <NavContainer>
      {navLinks.map(({ name, href }) => (
        <NavItem href={href} key={href}>
          {name}
        </NavItem>
      ))}
    </NavContainer>
  )
}