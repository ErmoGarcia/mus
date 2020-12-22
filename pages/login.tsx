import styles from 'styles/Login.module.scss'
import Layout from 'components/Layout'
import FormField from 'components/FormField'

export default function Login() {
    return(
        <Layout>
            <div className={styles.container}>
                <form action="" method="post">
                    <div className={styles.row}>
                        <FormField fieldname="username"></FormField>
                    </div>

                    <div className={styles.row}>
                        <FormField fieldname="password"></FormField>
                    </div>

                    <div className={styles.row}>
                        <button className={styles.submit} type="submit">Login</button>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.separator}>
                            <span> or </span>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
