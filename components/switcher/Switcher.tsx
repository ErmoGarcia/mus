import styles from 'styles/Switcher.module.scss'

export default function Switcher({ setTheme }) {

    function themeSwitch(event) {
        setTheme(event.target.checked ? 'theme-dark' : 'theme-light');
    }

    return (
        <label className={styles.switch}>
            <input id="switch" type="checkbox" onClick={themeSwitch} />
            <span className={styles.slider}></span>
        </label>
    )
}
