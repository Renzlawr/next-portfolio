import React from 'react'
import styles from '../../styles/about.module.scss'
import profPic from '../assets/prof-pic2.png'
import Image from 'next/image'

const about = () => {
  return (
    <div className={styles.hero}>
      <div className={styles['prof-pic-container']} >
        <div className={styles['prof-pic']}>
          <Image src={profPic} alt='profile picture' />
        </div>
      </div>
      <div className={styles['hero-text']}>
        <p>
          Hi there I&apos;m Logan,
        </p>
        <p>
          I&apos;m always discovering more about my passion in software development and love expressing my creativity through code while refining the way I approach problems.
        </p>
        <p>
          I can consistently create full stack applications and manipulate databases. I enjoy learning in fast paced agile environments where I feel everything I contribute is useful in some way. I enjoy working with a team or a partner as I&apos;d like to hear different approaches and points of view so I can improve my knowledge and understanding of coding concepts. My skill-set helps me achieve a good sense of time to progress ratio.
        </p>
        <p>
          I am looking to work with a team of people who respect each other and enjoy what they do for a living. I&apos;d love to learn new languages, frameworks, libraries, etc. and be supported in the process.
        </p>
      </div>
    </div>
  )
}

export default about