import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/NavBar.module.scss'
import hamburgers from '../../styles/hamburgers/hamburgers.module.scss'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={isMenuOpen ? styles.menu : undefined}>
      <div className={styles.navbar}>
        <Link href="/">
          <div onClick={() => isMenuOpen ? setIsMenuOpen(false) : undefined} className={styles.logo}>Logan Ramos</div>
        </Link>
        <button
          className={[styles.hamburger, hamburgers.hamburger, hamburgers['hamburger--spin'], isMenuOpen ? hamburgers['is-active'] : undefined].join(' ')}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={hamburgers['hamburger-box']}>
            <span className={hamburgers['hamburger-inner']}></span>
          </span>
        </button> 
        <ul className={styles.navList}>
          {[
            ['about', '/about'],
            ['skills', '/skills'],
            ['projects', '/projects'],
            ['contact', '/contact'],
          ].map(([string, link], index) => {
            return (
              <Link href={link} key={index}>
                <li className={styles.navListItem}>
                  {string}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      {isMenuOpen && (
        <ul className={styles.list}>
          {[
            ['about', '/about'],
            ['skills', '/skills'],
            ['projects', '/projects'],
            ['contact', '/contact'],
          ].map(([string, link], index) => {
            return (
              <Link href={link} key={index}>
                <li onClick={() => setIsMenuOpen(false)} className={[styles.listItem, isMenuOpen ? styles['fade-in'] : undefined].join(' ')}>
                  {string}
                </li>
              </Link>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default NavBar
