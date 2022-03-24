import React from 'react'
import Head from 'next/head'
import styles from  "./index.module.css"
import axios from "axios"
import Link from 'next/link'

export const getStaticProps= async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  return {props: {ninjas: res.data}}
}

const Ninjas = ({ninjas}) => {
  return (
    <> 
      <Head>
        <title>Ninja List </title>
        <meta name='keywords' content="ninjas"/>
      </Head>
      <div>
        <h1>Ninjas</h1>
        {ninjas.map(ninja => (
          <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name} </h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Ninjas