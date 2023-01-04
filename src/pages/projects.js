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
            <Image src={project.image} />
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <p>{`Coded in: ${project.languages}`}</p>
          </div>
        )
      })}
    </div>
  )
}

export default projects