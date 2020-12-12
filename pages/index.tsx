import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import Navbar from 'components/Navbar'

import { useState } from 'react'

export default function Home() {
    const [theme, setTheme] = useState('theme-light');

    return (
        <div className={theme}>
          <Head>
            <title>Mus Online</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Navbar setTheme={setTheme}></Navbar>

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
