
// routes to /

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Augie UI Prototypes</title>
      </Head>

      <p>Home Page</p>
      <Link href='/signup'>
        <a className='underline'>Go to Signup</a>
      </Link>
    </>
  )
}
