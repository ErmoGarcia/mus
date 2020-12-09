import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mus Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main className={styles.main}>
          <div>
              <h1 className={styles.title}>Welcome to Mus Online</h1>
              <h3 className={styles.author}>
                  By <a href="https://github.com/ErmoGarcia">Ermo</a>
              </h3>
          </div>
      </main>
    </div>
  )
}
