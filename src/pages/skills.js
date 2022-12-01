import React from 'react'
import styles from '../../styles/skills.module.scss'

const skills = () => {
  const skillIcons = [
    ['HTML 5', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
    ['CSS 3', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
    ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
    ['Ruby', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'],
    ['PostgreSQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'],
    ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
    ['Rails', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg'],
    ['Tailwind CSS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'],
    ['BootStrap', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'],
    ['Jest', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'],
    ['Next.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'],
    ['Sass', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'],
    ['ESLint', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg'],
    ['Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg'],
    ['GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'],
    ['VSCode', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg'],
    ['Figma', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'],
    ['Trello', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg'],
    ['Slack', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg'],
    ['YAML', 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Official_YAML_Logo.svg'],
    ['React Testing Library', 'https://testing-library.com/img/octopus-128x128.png'],
    ['Prettier', 'https://prettier.io/icon.png'],
    ['Terminal', 'https://www.svgrepo.com/show/158823/terminal-window.svg'],
    ['Notion', 'https://seeklogo.com/images/N/notion-app-logo-009B1538E8-seeklogo.com.png']
  ]

  return (
    <div className={styles.skills}>
      <h1>My Skills</h1>
      <div className={styles['skills-container']}>
        {
          skillIcons.map(([skillName, skillLink], index) => {
            return <img key={index} src={skillLink} alt={`Icon for ${skillName}`} />
          })
        }
      </div>  
    </div>
  )
}

export default skills