import styles from 'styles/Login.module.scss'
import Layout from 'components/Layout'
import FormField from 'components/FormField'

export default function Login() {
    return(
        <Layout>
            <div className={styles.container}>
                <form className={styles.form} action="" method="post">
                    <div className={styles.item}>
                        <FormField fieldname="username"></FormField>
                    </div>

                    <div className={styles.item}>
                        <FormField fieldname="password"></FormField>
                    </div>

                    <div className={styles.item}>
                        <button className={styles.btn} type="submit">
                            Login
                        </button>
                        <p className={styles.options}>
                            <span>Forgot your password</span>
                            <a className={styles.register} href="/">Sign up</a>
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
