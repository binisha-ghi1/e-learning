import React from 'react'
import feedback from '../../assets/images/feedback.png'

const Feedback = () => {
  return (
    <div>
    <div className='flex items-center justify-center mt-20'>
      <img src={feedback} alt="" className="" />
      <p>No feedback yet</p>
    </div>
    </div>
  )
}

export default Feedback
