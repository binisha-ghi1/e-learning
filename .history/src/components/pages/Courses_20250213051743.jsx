import { useState } from 'react';

function Courses() {
  // List of courses with categories
  const courseList = [
    { name: 'UI/UX Design', duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', category: 'Designing Courses' },
    { name: 'GRAPHIC DESIGN', duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', category: 'Designing Courses' },
    { name: 'DATA SCIENCE', duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', category: 'IT Courses' },
    { name: 'MEARN STACK', duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', category: 'IT Courses' },
    { name: 'WEB DEVELOPMENT', duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', category: 'IT Courses' },
    { name: 'Data Science', duration: '2.5 Months', price: '10,000', instructor: 'Charlotte', category: 'IT Courses' },
    { name: 'Project Management', duration: '2.5 Months', price: '10,000', instructor: 'Jordan', category: 'Business Courses' },
    { name: 'Digital Marketing', duration: '3 Months', price: '10,000', instructor: 'Nancy White', category: 'Marketing Courses' },
    { name: 'Business Analytics', duration: '3 Months', price: '10,000', instructor: 'Ethan', category: 'Business Courses' },
    { name: 'Brand Management', duration: '1.5 Month', price: 'Free', instructor: 'Charlotte', category: 'Free Courses' },
    { name: 'Public Speaking & Presentation', duration: '1 Month', price: 'Free', instructor: 'Jordan', category: 'Free Courses' },
    { name: '3D Modeling & Animation', duration: '3 Months', price: '10,000', instructor: 'Ethan', category: 'Creative Arts Courses' },
  ];

  // State to store the category that is clicked
  const [category, setCategory] = useState('All Courses');

  // Filter courses based on the selected category
  const filteredCourses = courseList.filter(course => 
    category === 'All Courses' || course.category === category
  );

  return (
    <div className='flex flex-row gap-20 mt-20'>
      <div className='flex'>
        <div className='flex flex-col items-start justify-start pl-20'>
          <h1 className='text-xl font-extrabold pl-12 pb-4'>OUR COURSES</h1>
          <div className='flex flex-col bg-gray-100 text-center pt-4 pb-4 pl-4 pr-4'>
            <p className='text-xl text-blue-950 font-bold underline pb-2'>Category</p>
            <p className='font-mono pb-1 hover:underline cursor-pointer' onClick={() => setCategory('All Courses')}>All Courses</p>
            <p className='font-mono pb-1 hover:underline cursor-pointer' onClick={() => setCategory('Free Courses')}>Free Courses</p>
            <p className='font-mono pb-1 hover:underline cursor-pointer' onClick={() => setCategory('IT Courses')}>IT Courses</p>
            <p className='font-mono pb-1 hover:underline cursor-pointer' onClick={() => setCategory('Designing Courses')}>Designing Courses</p>
            <p className='font-mono pb-1 hover:underline cursor-pointer' onClick={() => setCategory('Marketing Courses')}>Marketing Courses</p>
            <p className='font-mono pb-1 hover:underline cursor-pointer' onClick={() => setCategory('Business Courses')}>Business Courses</p>
            <p className='font-mono pb-1 hover:underline cursor-pointer' onClick={() => setCategory('Creative Arts Courses')}>Creative Arts Courses</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p><strong>Price:</strong> {course.price}</p>
              <h2 className="text-xl font-semibold mb-4">{course.name}</h2>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <button 
                onClick={() => alert(`You have clicked enroll for ${course.name}`)} 
                className="inline-block mt-4 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500"
              >
                VIEW COURSE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;


