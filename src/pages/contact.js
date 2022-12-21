import React from 'react'

const contact = () => {
  return (
    <form>
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