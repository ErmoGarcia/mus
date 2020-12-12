import styles from 'styles/Switcher.module.scss'

export default function Switcher() {
    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
        </label>
    )
}
