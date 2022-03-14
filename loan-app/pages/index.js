import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { DropdownMenu } from '../components/menu'
import Image from 'next/image'
import sunset from '../images/m2.jpeg'





export default function Home() {
  return (
    <div className={styles.container}>
     
      <DropdownMenu/>
      <Head>
        <title>HulerLoan</title>
        <meta name="description" content="HulerLoan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Image src={sunset} width={2000} height={1000} className={styles.background}/>
        <h1 className={styles.title}>
          Welcome to HulerLoan!
        </h1>
      </main>
    </div>
  )
}
