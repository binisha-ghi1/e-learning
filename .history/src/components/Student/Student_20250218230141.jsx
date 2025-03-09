import React from 'react'

const Student = () => {
  return (
    <div>
      <div className='text-center  '>
        <div className='flex items-center justify-center flex-row gap-12'>
            <div className='flex flex-col bg-gray-200 font-medium'>
                <h1 className='text-2xl pt-4 text-blue-950 font-medium'>James White</h1>
                <p>Student</p>
                <p>“Amazing platform! The <br/> lessons are clear, and the <br/> instructors are top-notch.”</p>
            </div>
            <div className='flex flex-col bg-gray-200 font-medium'>
                <h1 className='text-2xl text-blue-950'>Jack Grey</h1>
                <p>Student</p>
                <p>“The course exceeded my <br/>expectations. I can’t wait<br/> to take another one!”</p>
            </div>
            <div className='flex flex-col bg-gray-200 font-medium'>
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
