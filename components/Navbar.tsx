import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={styles.navigation}>
            <h1 className={styles.logo}>Mus Online</h1>
            <ul className={styles.routes}>
                <li className={styles.link}>Login</li>
                <li className={styles.link}>Register</li>
                <li className={styles.link}>History</li>
            </ul>
        </nav>
    )
}
