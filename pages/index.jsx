import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Augie UI Prototypes</title>
        <meta name="description" content="Josh's prototypes for the Augie UI he is making while he learns React/Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>
      <Link href='/signup'>
        <a>Signup</a>
      </Link>
    </>
  )
}
