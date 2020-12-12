import styles from 'styles/Home.module.scss'
import Layout from 'components/Layout'

export default function Home() {
    return (
        <Layout>
            <div className={styles.container}>
              <h1 className={styles.title}>Welcome to Mus Online</h1>
              <h3 className={styles.author}>
                  by <a href="https://github.com/ErmoGarcia">Ermo</a>
              </h3>
            </div>
        </Layout>
    )
}
