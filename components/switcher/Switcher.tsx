import styles from 'styles/Switcher.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Switcher({ setTheme, theme }) {

    const switchThemes = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    }

    return (
        <div className={styles.switch}>
            <input
                id="theme-switch"
                name="theme-switch"
                type="checkbox"
                onChange={switchThemes}
                checked={theme=='dark'}
            />
            <label
                for="theme-switch"
                title="Switch between light and dark themes"
            >
                <span className={styles.slider}>
                    <span className={styles.selector}>
                        <FontAwesomeIcon icon={theme=='dark'? faSun: faMoon} />
                    </span>
                </span>
            </label>
        </div>
    )
}
