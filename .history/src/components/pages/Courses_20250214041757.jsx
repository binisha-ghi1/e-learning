import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import ui from '../../assets/images/ui.png'
import graphic from '../../assets/images/graphic.png'
import science from '../../assets/images/science.png'
import web from '../../assets/images/web.png'
import project from '../../assets/images/project.png'
import digital from '../../assets/images/digital.png'
import  from '../../assets/images/ui.png'

function Courses() {

  const courseList = [
    { name: 'UI/UX Design', duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', category: 'Designing Courses', id: 'ui-ux' },
    { name: 'GRAPHIC DESIGN', duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', category: 'Designing Courses', id: 'graphic-design' },
    { name: 'DATA SCIENCE', duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', category: 'IT Courses', id: 'data-science' },
    { name: 'MERN STACK', duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', category: 'IT Courses', id: 'mern-stack' },
    { name: 'WEB DEVELOPMENT', duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', category: 'IT Courses', id: 'web-development' },
    { name: 'Project Management', duration: '2.5 Months', price: '10,000', instructor: 'Jordan', category: 'Business Courses', id: 'project-management' },
    { name: 'Digital Marketing', duration: '3 Months', price: '10,000', instructor: 'Nancy White', category: 'Marketing Courses', id: 'digital-marketing' },
    { name: 'Business Analytics', duration: '3 Months', price: '10,000', instructor: 'Ethan', category: 'Business Courses', id: 'business-analytics' },
    { name: 'Brand Management', duration: '1.5 Month', price: 'Free', instructor: 'Charlotte', category: 'Free Courses', id: 'brand-management' },
    { name: 'Public Speaking & Presentation', duration: '1 Month', price: 'Free', instructor: 'Jordan', category: 'Free Courses', id: 'public-speaking' },
    { name: '3D Modeling & Animation', duration: '3 Months', price: '10,000', instructor: 'Ethan', category: 'Creative Arts Courses', id: '3d-modeling' },
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

      <div className="flex-1">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p><strong>Price:</strong> {course.price}</p>
              <h2 className="text-xl font-semibold mb-4">{course.name}</h2>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>By,</strong> {course.instructor}</p>

              <div className='mt-4'>
                <button className='bg-yellow-400 text-white py-2 px-6 rounded-full flex items-center justify-center hover:bg-yellow-500 w-full'>
                  <IoCartOutline className="text-xl mr-2" />
                  Add to Cart
                </button>
              </div>
              
              <div className='mt-5 text-center hover:bg-gray-200 text-xl font-medium border-2 border-blue-900 text-blue-900 h-12'>
                <NavLink to={`/course/${course.id}`} className='pt-3 cursor-pointer w-full'>
                  VIEW COURSE
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;




