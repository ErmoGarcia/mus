import { useState, useEffect } from 'react'

import styles from 'styles/Layout.module.scss'
import Head from 'next/head'
import Navbar from 'components/Navbar'

export default function Layout({children}) {
    const [theme, setTheme] = useState<string | undefined>();

    useEffect(() => {
        if(!theme){
            setTheme(localStorage.getItem('theme') || 'light')
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`${styles.container} ${theme}`}>
            <Head>
                <title>Mus Online</title>
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Navbar setTheme={setTheme} theme={theme}></Navbar>

            <main>
                {children}
            </main>
        </div>
    )
}
