import React from 'react'

const MyCourses = () => {
  return (
    <div>
     <div>
        <h1 className='pt-20 pb-5 text-3xl font-bold text-blue-950 '>My Courses</h1>
        <div className='flex flex-row gap-10 text-xl font-bold text-blue-950 cursor-pointer'>
            <button>
            <h1>Enrolled Courses</h1></button>
            <button>
            <h1>Active Courses</h1></button>
            <button>
            <h1>Completed Courses</h1></button>
        </div>
     </div>
    </div>
  )
}

export default MyCourses
