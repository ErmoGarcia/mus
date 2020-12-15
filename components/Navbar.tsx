import styles from 'styles/Navbar.module.scss'
import Switcher from 'components/switcher/Switcher'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({ setTheme, theme }) {
    return (
        <nav className={styles.navigation}  aria-label="Main Navigation">
            <div className={styles.logo}>
                <img src="/logo.svg"
                alt="A coin with a women's face on it,
                 used in the gold suit of the Spanish deck,
                  known originally as 'Oros'.
                  Mus Online uses it as its logo" />
            </div>

            <button type="button" className={styles.dropdown}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <ul className={styles.list}>
                <li className={styles.item}>Login</li>
                <li className={styles.item}>Register</li>
                <li className={styles.item}>History</li>
                <li className={styles.item}>
                    <Switcher setTheme={setTheme} theme={theme}></Switcher>
                </li>
            </ul>
        </nav>
    )
}
