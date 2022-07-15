
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
  const Header = p => (
    <header className="block relative">
      {p.children}
    </header>
  )
  const ColorBar = p => (
    <div className={`h-3 bg-[${p.color}] w-[calc(100%-${p.offset})] ${p.offset && 'rounded-[0_0_1rem_0]'}`}></div>
  )
  const Nav = p => (
    <div className="grid gap-8 grid-flow-col justify-start p-8 px-24">
      {p.children}
    </div>
  )
  const NavItem = p => (
    <Link href={p.href}>
      <a className="text-slate-300 hover:text-white transition-colors text-lg">
        {p.children}
      </a>
    </Link>
  )
  const Logo = p => (
    <Link href={p.href}>
      <img
        src={p.src}
        className="absolute right-24 w-32 top-8 hover:cursor-pointer"
      />
    </Link>
  )

  // template
  return (
    <Header>

      <ColorBar color='#FFC18E' />
      <ColorBar color='#CA4E79' />
      <ColorBar color='#7A4069' offset='14rem' />
      <ColorBar color='#513252' offset='16rem' />

      <Nav>
        {navLinks.map(({ name, href }) => (
          <NavItem href={href}>
            {name}
          </NavItem>
        ))}
      </Nav>
      <Logo href='/' src='/logo.svg' />
    </Header>
  )
}