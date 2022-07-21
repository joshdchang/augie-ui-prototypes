
// routes to /

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../graphql/auth'

export default function Home() {

  const { authenticated } = useContext(AuthContext)
  const router = useRouter()
  
  useEffect(() => {
    if (authenticated) {
      router.push('/dashboard')
    }
  }, [authenticated])

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
