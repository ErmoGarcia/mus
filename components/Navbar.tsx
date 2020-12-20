import styles from 'styles/Navbar.module.scss'
import Switcher from 'components/switcher/Switcher'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

type NavbarProps = {setTheme: any, theme: string};

export default function Navbar({ setTheme, theme }: NavbarProps) {
    return (
        <nav className={styles.navigation}  aria-label="Main Navigation">
            <div className={styles.logo}>
                <Link href="/"><a>
                    <img src="/logo.svg"
                    alt="A coin with a women's face on it,
                    used in the gold suit of the Spanish deck,
                    known originally as 'Oros'.
                    Mus Online uses it as its logo" />
                 </a></Link>
            </div>

            <button type="button" className={styles.dropdown}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <ul className={styles.list}>
                <li className={styles.item}><Link href="/login"><a>Login</a></Link></li>
                <li className={styles.item}><Link href="#"><a>Register</a></Link></li>
                <li className={styles.item}><Link href="#"><a>History</a></Link></li>
                <li className={styles.item}>
                    <Switcher setTheme={setTheme} theme={theme}></Switcher>
                </li>
            </ul>
        </nav>
    )
}
