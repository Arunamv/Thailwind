import React from 'react'

const Model = ({ setShowPopup, setChoice },props) => {

    const handleOKClick = () => {
        setChoice(true)
        setShowPopup(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setShowPopup(false)
    }
  return (
    <div className='bg-zinc-200 opacity-80 fixed inset-0 z-50'>
        <div className='flex h-screen items-center justify-center'>
            <div className='flex-col justify-center bg-white py-12 px-24 border-4 border-sky-200 rounded-xl'>
            <div className="flex  text-black text-lg  text-zinc-600   mb-10" >{props.title}</div>
                      <div className="flex">
                          <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-sky-400 ">Ok</button>
                          <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-black bg-sky-100 ">Close</button>
                      </div>
            </div>

        </div>
      
    </div>
  )
}

export default Model
