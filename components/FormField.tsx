import styles from 'styles/FormField.module.scss'
import { useState } from 'react'

type FormFieldProps = {
    fieldname: string,
    validator?(val: string): boolean,
    info?: string
};

export default function FormField(
    { fieldname , validator, info } : FormFieldProps
) {

    const [invalid, setInvalid] : [boolean, any] = useState(false);

    const checkValid = (event: {target: {value: string}}) => {
        if (validator) {
            setInvalid(!validator(event.target.value));
        }
    }

    return(
        <div className={styles.field}>
            <input
                id={ fieldname }
                className={styles.input}
                type="text"
                name={ fieldname }
                required
                onChange={checkValid}
            />
            <label className={styles.label} htmlFor={ fieldname }>
                <span className={styles.fieldname}>{ fieldname }</span>
            </label>
            { invalid && <span className={styles.invalid}>{ info }</span> }
        </div>
    )
}
