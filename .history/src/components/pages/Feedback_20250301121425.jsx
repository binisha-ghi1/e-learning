import React from 'react'
import feedback from '../../assets/images/feedback.png'

const Feedback = () => {
  return (
    <div>
    <div className='flex flex-col items-center justify-center mt-20'>
      <img src={feedback} alt="" className="" />
      <p className='text-gray-700 text-xl mt-10 bg-gray-200 text-center pt-4 pl-4 pr-4 pb-4 rounded-lg underline'>No feedback yet.</p>
    </div>
    </div>
  )
}

export default Feedback
