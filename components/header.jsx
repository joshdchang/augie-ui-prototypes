import Link from "next/link"

export default function Header() {

  const navbar = [
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
    <div className="relative">
      <div className="h-3 bg-[#FFC18E]"></div>
      <div className="h-3 bg-[#CA4E79]"></div>
      <div className="h-3 bg-[#7A4069] w-[calc(100%-14rem)] rounded-[0_0_1rem_0]"></div>
      <div className="h-3 bg-[#513252] w-[calc(100%-16rem)] rounded-[0_0_1rem_0]"></div>
      <div className="grid gap-8 grid-flow-col justify-start p-8 px-24">
        {navbar.map(({ name, href }) => (
          <Link href={href} key={href}>
            <a className="text-slate-300 hover:text-white transition-colors text-lg">{name}</a>
          </Link>
        ))}
      </div>
      <Link href="/">
        <img src="/augie-logo.svg" className="absolute right-24 w-32 top-8 hover:cursor-pointer" />
      </Link>
    </div>
  )
}