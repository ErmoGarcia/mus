import styles from 'styles/Switcher.module.scss'

export default function Switcher({ setTheme, theme }) {

    const switchThemes = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    }

    return (
        <label className={styles.switch}>
            <input id="switch" type="checkbox"
                onChange={switchThemes}
                checked={theme=='dark'}
            />
            <span className={styles.slider}></span>
        </label>
    )
}
