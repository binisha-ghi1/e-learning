import React from 'react'
import message from '../../assets/images/message.png'

const Messages = () => {
  return (
    <div>
     <div className='flex flex-col items-center justify-center mt-20'>
      <img src={message} alt="" className="src" />
      <p className='text-gray-700 text-xl pt-4 bg-'>No message yet.</p>
     </div>
    </div>
  )
}

export default Messages
