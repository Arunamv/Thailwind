import React, { useState } from 'react'
import Model from './Model';

const Popup = () => {
    const[showPopup,setShowPopup] = useState(false);
    const[choice,setChoice] = useState(false);
  const titleName="Are you Sure!" 
  return (
    <div>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowPopup(true)}
      >
        Open regular modal
      </button>

      { choice && <div><p>youe are bitten!</p> </div> }
      {showPopup && <Model setShowPopup={setShowPopup}  setChoice={setChoice} title={titleName} /> }

    </div>
  )
}

export default Popup
