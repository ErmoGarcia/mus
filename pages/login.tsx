import styles from 'styles/Login.module.scss'
import Layout from 'components/Layout'

export default function Login() {
    return(
        <Layout>
            <div className={styles.container}>
                <form action="" method="post">
                    <div className={styles.field}>
                        <input type="text" name="username" required />
                        <label htmlFor="username">
                            <span className={styles.fieldname}>Username</span>
                        </label>
                    </div>

                    <div className={styles.field}>
                        <input type="text" name="password" required />
                        <label htmlFor="password">
                            <span className={styles.fieldname}>Password</span>
                        </label>
                    </div>

                    <button className={styles.submit} type="submit">Login</button>
                </form>
                <div className={styles.separator}>
                    <span> or </span>
                </div>
            </div>
        </Layout>
    )
}
