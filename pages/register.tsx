import styles from 'styles/Register.module.scss'
import Layout from 'components/Layout'
import FormField from 'components/FormField'

import {validUser, validPass, validEmail} from 'lib/validators'

export default function Register() {
    return(
        <Layout>
            <div className={styles.container}>
                <h1 className="screen-reader-text">Register Form</h1>
                <form className={styles.form} action="" method="post">
                    <div className={styles.item}>
                        <FormField
                            fieldname="username" validator={validUser}
                        ></FormField>
                    </div>

                    <div className={styles.item}>
                        <FormField
                            fieldname="email" validator={validEmail}
                        ></FormField>
                    </div>

                    <div className={styles.item}>
                        <FormField
                            fieldname="password" validator={validPass}
                        ></FormField>
                    </div>

                    {
                    //<div className={styles.item}>
                        //<FormField fieldname="confirm password"></FormField>
                    //</div>
                    }

                    <div className={styles.item}>
                        <button className={styles.btn} type="submit">
                            Register
                        </button>
                        <p className={styles.options}>
                            Already registered? <a href="/login">Sign in</a>
                        </p>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
