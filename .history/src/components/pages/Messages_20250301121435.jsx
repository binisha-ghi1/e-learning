import React from 'react'
import message from '../../assets/images/message.png'

const Messages = () => {
  return (
    <div>
     <div className='flex flex-col items-center justify-center mt-20'>
      <img src={message} alt="" className="src" />
      <p className='text-gray-700 text-xl mt-10 bg-gray-200 text-center pt-4 pl-4 pr-4 pb-4 rounded-lg u'>No message yet.</p>
     </div>
    </div>
  )
}

export default Messages
