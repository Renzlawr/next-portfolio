import React, { useState } from 'react'
import styles from '../../styles/NavBar.module.scss'

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false)

  return (
    <div className={hamburger && styles.menu}>
      <div className={styles.navbar}>
        <div className={styles.logo}>Logan Ramos</div>
        <svg
          onClick={() => setHamburger(!hamburger)}
          className={styles.hamburger}
          viewBox='0 0 100 80'
          width='40'
          height='40'
        >
          <rect rx='8' width='100' height='15'></rect>
          <rect rx='8' y='30' width='100' height='15'></rect>
          <rect rx='8' y='60' width='100' height='15'></rect>
        </svg>
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
      {hamburger && (
        <ul className={styles.list}>
          {[
            ['about', 'link'],
            ['skills', 'link'],
            ['projects', 'link'],
            ['contact', 'link'],
          ].map(([string, link], index) => {
            return (
              <li className={styles.listItem} key={index}>
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
