import React, {useState} from 'react'
import styles from '../../styles/skills.module.scss'
import RightArrow from '../assets/RightArrow.js'
import Link from 'next/link'

const skills = () => {
  const skillIcons = [
    ['HTML 5', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
    ['CSS 3', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
    ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
    ['Ruby', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg'],
    ['PostgreSQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'],
    ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
    ['Rails', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg'],
    ['Tailwind CSS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'],
    ['BootStrap', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'],
    ['Jest', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'],
    ['Next.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'],
    ['Sass', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'],
    ['ESLint', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg'],
    ['Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'],
    ['GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'],
    ['VSCode', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'],
    ['Figma', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'],
    ['Trello', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg'],
    ['Slack', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg'],
    ['YAML', 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Official_YAML_Logo.svg'],
    ['Testing Library', 'https://testing-library.com/img/octopus-128x128.png'],
    ['Prettier', 'https://prettier.io/icon.png'],
    ['Terminal', 'https://www.svgrepo.com/show/158823/terminal-window.svg'],
    ['Notion', 'https://seeklogo.com/images/N/notion-app-logo-009B1538E8-seeklogo.com.png']
  ]

  return (
    <div className={styles.skills}>
      <div className={styles['skills-container']}>
        
          {skillIcons.map(([skillName, skillLink], index) => {
            return(
              <div key={index} className={styles['skill-drop-box']}>
                <div className={styles['skill-container']}>
                  <img className={styles['skill-icons']} key={index} src={skillLink} alt={`Icon for ${skillName}`} />
                </div>
                <p className={styles['skill-text']}>{skillName}</p>
              </div>
            )
        })}
      </div>
      <Link href='/contact'>
        <div className={styles['call-to-action']}>
          Help me expand my skills
          <div className={styles['right-arrow']}>
            <RightArrow />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default skills