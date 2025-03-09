import React from 'react'
import feedback from '../../assets/images/feedback.png'

const Feedback = () => {
  return (
    <div>
    <div className='flex flex-col items-center justify-center mt-20'>
      <img src={feedback} alt="" className="" />
      <p className='text-gray-700 pt-4 text-xl underline'>No feedback yet.</p>
    </div>
    </div>
  )
}

export default Feedback
