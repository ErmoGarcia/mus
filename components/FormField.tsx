import styles from 'styles/FormField.module.scss'

export default function FormField({ fieldname } : { fieldname : string }) {
    return(
        <div className={styles.field}>
            <input
                id={ fieldname }
                className={styles.input}
                type="text"
                name={ fieldname }
                required
            />
            <label className={styles.label} htmlFor={ fieldname }>
                <span className={styles.fieldname}>{ fieldname }</span>
            </label>
        </div>
    )
}
