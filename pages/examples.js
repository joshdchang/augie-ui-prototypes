
// routes to /examples

import Head from 'next/head'
import { CenterContent, CardHeader, MainCard } from '../components/util/card'
import Nav from '../components/nav'

export default function Examples() {
  return (
    <>
      <Head>
        <title>Examples - Augie UI Prototypes</title>
      </Head>

      <Nav />
      
      <CenterContent>
        <MainCard>
          <CardHeader>Examples</CardHeader>
          <p>This is a work in progress</p>
        </MainCard>
      </CenterContent>
    </>
  )
}
