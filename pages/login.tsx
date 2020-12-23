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
