import React from 'react';
import Popup from 'reactjs-popup';
import './Popup2.css'

const Popup2 = () => {
  return (
    <div>
      
 <Popup 
 trigger={<button className="button"> Open Modal </button>} modal nested >
     {close => ( <div className="modal"> <button className="close" onClick={close}> &times; 
     </button> <div className="header"> Modal Title </div> <div className="content">
         {' '} Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. 
         </div> <div className="actions"> 
         <Popup trigger={<button className="button"> Trigger </button>} 
         position="top center" nested > <span> Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Beatae magni omnis delectus nemo, 
            max </span> </Popup> 
            <button className="button" onClick={() => { console.log('modal closed '); close(); }} > close modal </button> </div> </div> )} </Popup>; 
    </div>
  )
}

export default Popup2
