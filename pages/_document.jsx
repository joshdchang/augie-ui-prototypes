
// the structure of the document

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='bg-slate-900 text-white'>
      <Head>
        <meta name="description" content="Josh's prototypes for the Augie UI he is making while he learns React/Next" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
