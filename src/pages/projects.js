import React from 'react'
import styles from '../../styles/projects.module.scss'
import projectList from '../assets/projectList'
import Image from 'next/image'

const projects = () => {
  return (
    <div className={styles['projects-container']}>
      {projectList.map((project, index) => {
        return (
          <div key={index} className={styles.project}>
            <Image src={project.image} className={styles['project-image']} />
            <div className={styles['project-name']}>{project.name}</div>
            <p className={styles['project-desc']}>{project.description}</p>
            <p className={styles['project-lang']}>{`Made with: ${project.languages} eventually have logos from skills page in the same format here instead of plain text also make this a dropdown instead of all up in your face to minimize distraction`}</p>
          </div>
        )
      })}
    </div>
  )
}

export default projects