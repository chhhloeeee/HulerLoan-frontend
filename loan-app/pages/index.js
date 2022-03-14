import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { DropdownMenu } from '../components/menu'

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
        <h1 className={styles.title}>
          Welcome to HulerLoan!
        </h1>

        <div className={styles.grid}>
        <h2 className={styles.card}> Categories &rarr;
          <Link href="/category/list">
          <p>View and add categories to loan</p>
          </Link>
        </h2>
        </div>
      </main>
    </div>
  )
}
