import React from 'react'
import styles from '../../styles/contact.module.scss'

const contact = () => {
  return (
    <form className={styles['contact-container']}>
      <div className={styles['names-container']}>
        <div className={styles['name-container']}>
          <label for='first-name'>
            First Name:
          </label>
          <input className={styles['input']} name='first-name' type='text' id='first-name' placeholder='John' />
        </div>
        <div className={styles['name-container']}>
          <label for='last-name' type='text'>
            Last Name:
          </label>
          <input className={styles['input']} name='last-name' type='text' id='last-name' placeholder='Doe' />
        </div>
      </div>
      <label for='Subject' type='text'>
        Subject:
      </label>
      <input className={styles['input']} name='subjest' type='text' id='subjest' placeholder='Subject'/>
      <label for='Description' type='text'>
        Description:
      </label>
      <input className={styles['input-desc']} name='description' type='text-area' id='description'  placeholder='Description'/>
      <button type="submit" className={styles.submit}>
        Submit
      </button>
    </form>
  )
}

export default contact