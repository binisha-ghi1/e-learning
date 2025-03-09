import React from 'react'

const Student = () => {
  return (
    <div>
      <div className='text-center  '>
        <div className='flex items-center justify-center flex-row gap-12'>
            <div className='flex flex-col bg-gray-200'>
                <h1>James White</h1>
                <p>Student</p>
                <p>“Amazing platform! The <br/> lessons are clear, and the <br/> instructors are top-notch.”</p>
            </div>
            <div className='flex flex-col bg-gray-200'>
                <h1 className='text-2xl text-blue9'>Jack Grey</h1>
                <p>Student</p>
                <p>“The course exceeded my <br/>expectations. I can’t wait<br/> to take another one!”</p>
            </div>
            <div className='flex flex-col bg-gray-200'>
                <h1 className='text-2xl text-blue-950'>Nancy Nancy</h1>
                <p>Student</p>
                <p>“The courses are well- <br/>structured and easy to <br/>follow. I learned so much!”</p>
            </div>


        </div>
      </div>
    </div>
  )
}

export default Student
