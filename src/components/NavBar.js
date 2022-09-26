import React, { useState, useEffect } from 'react'
import styles from '../../styles/NavBar.module.scss'
import hamburgers from '../../styles/hamburgers/hamburgers.module.scss'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={isMenuOpen ? styles.menu : undefined}>
      <div className={styles.navbar}>
        <div className={styles.logo}>Logan Ramos</div>
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
            ['about', 'link'],
            ['skills', 'link'],
            ['projects', 'link'],
            ['contact', 'link'],
          ].map(([string, link], index) => {
            return (
              <li className={styles.navListItem} key={index}>
                {string}
              </li>
            )
          })}
        </ul>
      </div>
      {isMenuOpen && (
        <ul className={styles.list}>
          {[
            ['about', 'link'],
            ['skills', 'link'],
            ['projects', 'link'],
            ['contact', 'link'],
          ].map(([string, link], index) => {
            return (
              <li className={[styles.listItem, isMenuOpen ? styles['fade-in'] : undefined].join(' ')} key={index}>
                {string}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default NavBar
