
// the header is automatically rendered at the top of each page (rendered from the layout)

import Link from "next/link"

// local components
const HeaderContainer = ({ children }) => (
  <header className="block relative">
    {children}
  </header>
)
const ColorBar = ({ color, offset }) => (
  <div className={`h-3 ${color} ${offset} ${offset && 'rounded-[0_0_1rem_0]'}`}></div>
)
const Logo = ({ href, src }) => (
  <Link href={href}>
    <img
      src={src}
      className="absolute right-24 w-32 top-8 hover:cursor-pointer"
    />
  </Link>
)

export default function Header() {
  return (
    <HeaderContainer>

      <ColorBar color='bg-[#FFC18E]' />
      <ColorBar color='bg-[#CA4E79]' />
      <ColorBar color='bg-[#7A4069]' offset='w-[calc(100%-14rem)]' />
      <ColorBar color='bg-[#513252]' offset='w-[calc(100%-16rem)]' />

      <Logo href='/' src='/logo.svg' />
    </HeaderContainer>
  )
}