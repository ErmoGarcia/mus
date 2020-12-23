import styles from 'styles/Login.module.scss'
import Layout from 'components/Layout'
import FormField from 'components/FormField'

export default function Login() {
    return(
        <Layout>
            <form action="" method="post">
                <div className={styles.container}>
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

                    <div className={styles.item+" "+styles.separator}>
                        <span> or </span>
                    </div>

                    <div className={styles.item}>
                        <button className={styles.btn} type="submit">
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
