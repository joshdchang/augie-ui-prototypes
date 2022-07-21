
// routes to /dashboard

import Head from 'next/head'
import { LOAD_AUGIES } from '../graphql/queries'
import { useContext } from 'react'
import { AuthContext } from '../graphql/auth'
import { useQuery } from '@apollo/client'
import { CenterContent, CardDivider, CardHeader, MainCard } from '../components/util/card'
import Link from 'next/link'
import { Button } from 'primereact/button'

export default function Dashboard() {

  const { user, authenticated, logout } = useContext(AuthContext)
  const { data, loading, error } = useQuery(LOAD_AUGIES)

  return (
    <>
      <Head>
        <title>Dashboard - Augie UI Prototypes</title>
      </Head>

      <div className='p-10'>
        <Button label='Log Out' onClick={logout} className='p-button-outlined' />
      </div>

      {authenticated && <CenterContent>
        <MainCard>

          <CardHeader>Welcome, {user.given_name}</CardHeader>
          <CardDivider>Your Augies</CardDivider>

          <div className='grid gap-3'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.getAugies.map(augie =>
              <div key={augie.id} className='p-3 bg-slate-900 rounded-lg'>
                {augie.name}
              </div>
            )}
          </div>

          <Link href='/new'>
            <Button label='Create New' className='p-button-rounded' />
          </Link>
        </MainCard>
      </CenterContent>}
    </>
  )
}
