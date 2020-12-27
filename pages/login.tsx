import styles from 'styles/Login.module.scss'
import Layout from 'components/Layout'
import FormField from 'components/FormField'

import {validUser, validPass} from 'lib/validators'

export default function Login() {
    return(
        <Layout>
            <div className={styles.container}>
                <h1 className="screen-reader-text">Login Form</h1>
                <form className={styles.form} action="" method="post">
                    <div className={styles.item}>
                        <FormField
                            fieldname="username" validator={validUser}
                        ></FormField>
                    </div>

                    <div className={styles.item}>
                        <FormField
                            fieldname="password" validator={validPass}
                        ></FormField>
                    </div>

                    <div className={styles.item}>
                        <button className={styles.btn} type="submit">
                            Login
                        </button>
                        <p className={styles.options}>
                            <span>Forgot your password</span>
                            <a className={styles.register} href="/register">
                                Sign up
                            </a>
                        </p>
                    </div>
                </form>

                <div className={styles.separator}>
                    <span> or </span>
                </div>

                <form className={styles.form} action="" method="post">
                    <div className={styles.item}>
                        <button className={styles.btn} type="submit">
                            Sign in with Google
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
