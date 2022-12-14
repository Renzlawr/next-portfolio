import React from 'react'
import styles from '../../styles/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <span>© Logan Ramos 2022</span>
      </Link>
    </footer>
  )
}

export default Footer