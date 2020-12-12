import styles from 'styles/Navbar.module.scss'
import Switcher from 'components/switcher/Switcher'

export default function Navbar() {
    return (
        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="logo" />
            </div>
            <ul className={styles.routes}>
                <li className={styles.link}>Login</li>
                <li className={styles.link}>Register</li>
                <li className={styles.link}>History</li>
                <li className={styles.link}><Switcher></Switcher></li>
            </ul>
        </nav>
    )
}
