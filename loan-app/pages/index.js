import Head from 'next/head'
import Login from '../components/login'

export default function Home() {
  return (
    <>
      <Head>
          <title>HulerLoan</title>
          <meta name="description" content="HulerLoan" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
       <main>
          <Login/>
       </main>
     </>
  )
}
