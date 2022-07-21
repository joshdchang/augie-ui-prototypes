
// routes to /layout

import Head from "next/head"
import { CenterContent, CardHeader, MainCard } from '../components/util/card'
import Nav from '../components/nav'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Augie UI Prototypes</title>
      </Head>

      <Nav />
      
      <CenterContent>
        <MainCard>
          <CardHeader>About Augie</CardHeader>
          <p>This is a work in progress</p>
        </MainCard>
      </CenterContent>
    </>
  )
}