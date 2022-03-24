import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./index.module.css"

const Header = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1>Ninja List</h1>
          <Image src="/logo.png" width="128" height="77" alt="logo" />
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>Ninja Listing</a></Link>
    </nav>
  )
}

export default Header