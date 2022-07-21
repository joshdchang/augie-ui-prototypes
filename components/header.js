
// the header is automatically rendered at the top of each page (rendered from the layout)

import Link from "next/link"

export default function Header() {

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

  // local components
  const Header = ({ children }) => (
    <header className="block relative">
      {children}
    </header>
  )
  const ColorBar = ({ color, offset }) => (
    <div className={`h-3 ${color} ${offset} ${offset && 'rounded-[0_0_1rem_0]'}`}></div>
  )
  const Nav = ({ children }) => (
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
  const Logo = ({ href, src }) => (
    <Link href={href}>
      <img
        src={src}
        className="absolute right-24 w-32 top-8 hover:cursor-pointer"
      />
    </Link>
  )

  return (
    <Header>

      <ColorBar color='bg-[#FFC18E]' />
      <ColorBar color='bg-[#CA4E79]' />
      <ColorBar color='bg-[#7A4069]' offset='w-[calc(100%-14rem)]' />
      <ColorBar color='bg-[#513252]' offset='w-[calc(100%-16rem)]' />

      <Nav>
        {navLinks.map(({ name, href }) => (
          <NavItem href={href} key={href}>
            {name}
          </NavItem>
        ))}
      </Nav>
      <Logo href='/' src='/logo.svg' />
    </Header>
  )
}