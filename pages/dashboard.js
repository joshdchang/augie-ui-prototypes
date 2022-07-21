
// routes to /dashboard

import Head from 'next/head'
import { AuthContext } from '../graphql/auth'
import { useContext } from 'react'

export default function Dashboard() {

  const { user } = useContext(AuthContext)

  console.log(user)

  return (
    <>
      <Head>
        <title>Dashboard - Augie UI Prototypes</title>
      </Head>

      <div>
        {user !== null && <div>
          <p>Login successful!</p>
          <p>User: {user.email}</p>
        </div>}
      </div>

    </>
  )
}
