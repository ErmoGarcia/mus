import styles from 'styles/FormField.module.scss'
import { useState } from 'react'

type FormFieldProps = {
    fieldname: string,
    validator?(val: string): string | null,
};

export default function FormField({ fieldname , validator } : FormFieldProps) {

    const [invalid, setInvalid] : [string | null, any] = useState(null);

    const checkValid = (event: {target: {value: string}}) => {
        if (validator) {
            setInvalid(validator(event.target.value));
        }
    }

    return(
        <div className={styles.field}>
            <input
                id={ fieldname }
                className={ invalid ? styles.invalid : styles.valid }
                type="text"
                name={ fieldname }
                required
                onChange={ checkValid }
            />
            <label className={styles.label} htmlFor={ fieldname }>
                <span className={styles.fieldname}>{ fieldname }</span>
            </label>
            { invalid && <span className={styles.error}>{ invalid }</span> }
        </div>
    )
}
