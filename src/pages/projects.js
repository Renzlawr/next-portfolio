import React from 'react'
import styles from '../../styles/projects.module.scss'

const projects = () => {
  const projectList = [
    {
      name: 'test',
      description: 'this is a bigger test',
      languages: 'Next.js, Sass, Etc.'
    },
    {
      name: 'test',
      description: 'this is a bigger test',
      languages: 'Next.js, Sass, Etc.'
    },
    {
      name: 'test',
      description: 'this is a bigger test',
      languages: 'Next.js, Sass, Etc.'
    }
  ]

  console.log(projectList.map(project => project.name))

  return (
    <div className={styles['projects-container']}>
      {projectList.map((project, index) => {
        return (
          <div key={index} className={styles.project}>
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