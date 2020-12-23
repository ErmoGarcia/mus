import styles from 'styles/Register.module.scss'
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
                        <FormField fieldname="email"></FormField>
                    </div>

                    <div className={styles.item}>
                        <FormField fieldname="password"></FormField>
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
