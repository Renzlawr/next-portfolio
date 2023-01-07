import React from 'react'
import styles from '../../styles/contact.module.scss'

const contact = () => {
  return (
    <form className={styles['contact-container']}>
      <label for='first-name'>
        First Name:
      </label>
      <input name='first-name' type='text' id='first-name' />
      <label for='last-name' type='text'>
        last-name:
      </label>
      <input name='last-name' type='text' id='last-name' />
      <label for='Subject' type='text'>
        Subject:
      </label>
      <input name='subjest' type='text' id='subjest' />
      <label for='Description' type='text'>
        Description:
      </label>
      <input name='description' type='text' id='description' />
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default contact