import React from 'react'

const FirstComponent = () => {
  return (
    <div style={{padding:'20px'}}>
        <label >First name:</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label >Last name:</label><br/>
  <input type="text" id="lname" name="lname" /><br/>

  </div>
  )
}

export default FirstComponent
