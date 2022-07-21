import React from 'react'

const SecondComponent = () => {
  return (
    <div style={{padding:'20px'}}>
      <label>Age:</label>
      <input type='text' name='age' /><br/>
      <label>Location:</label>
      <input type='text' name='location' /><br/>
      <label>Address:</label>
      <input type='text' name='address' /><br/>
    </div>
  )
}

export default SecondComponent
