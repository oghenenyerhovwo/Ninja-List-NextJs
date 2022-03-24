import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect }  from 'react'
import styles from "../styles/404.module.css"

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
      setTimeout(() => {
        //   router.push("-1")
          router.push("/")
      }, 3000);
    }, [router])
  return (
    <>
      <Head>
        <title>Not Found </title>
        <meta name='keywords' content="ninjas"/>
      </Head>
      <div className={styles.notFound}>
          <h1>Oooops..............</h1>
          <h2>That page cannot be found</h2>
          <p>
              Go back to <Link href="/"><a>Homepage</a></Link>
          </p>
      </div>
    </>
  )
}

export default NotFound