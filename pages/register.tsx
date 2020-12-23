import styles from 'styles/Register.module.scss'
import Layout from 'components/Layout'
import FormField from 'components/FormField'

import {valid_user, valid_pass} from 'lib/validators'

export default function Register() {
    return(
        <Layout>
            <div className={styles.container}>
                <h1 className="screen-reader-text">Register Form</h1>
                <form className={styles.form} action="" method="post">
                    <div className={styles.item}>
                        <FormField
                            fieldname="username"
                            validator={valid_user}
                            info="Username must be between 4 and 16 characters long"
                        ></FormField>
                    </div>

                    <div className={styles.item}>
                        <FormField fieldname="email" validator={valid_user}></FormField>
                    </div>

                    <div className={styles.item}>
                        <FormField
                            fieldname="password"
                            validator={valid_pass}
                            info="Password must contain at least one number and one uppercase letter"
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
