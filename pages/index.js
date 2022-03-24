import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name='keywords' content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>You can add more skills to your work profile to get more matches. Use the search bar to find jobs outside your added skill set. You can add more skills to your work profile to get more matches. Use the search bar to find jobs outside your added skill set.</p>
        <p className={styles.text}>You can add more skills to your work profile to get more matches. Use the search bar to find jobs outside your added skill set. You can add more skills to your work profile to get more matches. Use the search bar to find jobs outside your added skill set.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
