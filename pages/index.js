
// routes to /

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../graphql/auth'
import Nav from '../components/nav'
import { CenterContent, CardHeader, CardDivider, MainCard } from '../components/util/card'
import { Button } from 'primereact/button'

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

      <Nav />

      <CenterContent>
        <MainCard>
          <CardHeader>Augie UI Prototypes</CardHeader>
          <CardDivider>Start Creating</CardDivider>
          <div className='grid gap-3'>
            <Link href='/signup'>
              <Button label='Sign Up' className='p-button-rounded' />
            </Link>
            <Link href='/login'>
              <Button label='Log In' className='p-button-rounded p-button-outlined' />
            </Link>
          </div>
        </MainCard>
      </CenterContent>
    </>
  )
}
