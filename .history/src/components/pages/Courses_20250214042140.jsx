import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

// Import course images
import ui from '../../assets/images/ui.png';
import graphic from '../../assets/images/graphic.png';
import science from '../../assets/images/science.png';
import web from '../../assets/images/web.png';
import project from '../../assets/images/project.png';
import digital from '../../assets/images/digital.png';
import brand from '../../assets/images/brand.png';
import public from '../../assets/images/public.png';
import threeD from '../../assets/images/3d.png';
import stack from '../../assets/images/stack.png';
import business from '../../assets/images/business.png';

function Courses() {

  const courseList = [
    { name: 'UI/UX Design', image: ui, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', category: 'Designing Courses', id: 'ui-ux' },
    { name: 'Graphic Design', image: graphic, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', category: 'Designing Courses', id: 'graphic-design' },
    { name: 'Data Science', image: science, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', category: 'IT Courses', id: 'data-science' },
    { name: 'MERN Stack', image: stack, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', category: 'IT Courses', id: 'mern-stack' },
    { name: 'Web Development', image: web, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', category: 'IT Courses', id: 'web-development' },
    { name: 'Project Management', image: project, duration: '2.5 Months', price: '10,000', instructor: 'Jordan', category: 'Business Courses', id: 'project-management' },
    { name: 'Digital Marketing', image: digital, duration: '3 Months', price: '10,000', instructor: 'Nancy White', category: 'Marketing Courses', id: 'digital-marketing' },
    { name: 'Business Analytics', image: business, duration: '3 Months', price: '10,000', instructor: 'Ethan', category: 'Business Courses', id: 'business-analytics' },
    { name: 'Brand Management', image: brand, duration: '1.5 Month', price: 'Free', instructor: 'Charlotte', category: 'Free Courses', id: 'brand-management' },
    { name: 'Public Speaking & Presentation', image: public, duration: '1 Month', price: 'Free', instructor: 'Jordan', category: 'Free Courses', id: 'public-speaking' },
    { name: '3D Modeling & Animation', image: threeD, duration: '3 Months', price: '10,000', instructor: 'Ethan', category: 'Creative Arts Courses', id: '3d-modeling' },
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              
              {/* Course Image */}
              <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4"/>

              {/* Course Details */}
              <h2 className="text-xl font-semibold text-center">{course.name}</h2>
              <p className="text-gray-600"><strong>Duration:</strong> {course.duration}</p>
              <p className="text-gray-600"><strong>By:</strong> {course.instructor}</p>
              <p className="text-lg font-bold mt-2"><strong>Price:</strong> {course.price}</p>

              {/* Buttons */}
              <div cla





