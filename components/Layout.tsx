import { useState, useEffect } from 'react'

import styles from 'styles/Layout.module.scss'
import Head from 'next/head'
import Navbar from 'components/Navbar'

type LayoutProps = { children : any};

export default function Layout({children}: LayoutProps) {
    const [theme, setTheme]: [string, any] = useState("");

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
