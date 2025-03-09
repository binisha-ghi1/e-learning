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
import pocket from '../../assets/images/pocket.png';
import threeD from '../../assets/images/3d.png';
import stack from '../../assets/images/stack.png';
import business from '../../assets/images/business.png';

// Import instructor images
import nancy from '../../assets/images/nancy.png';
import henry from '../../assets/images/henry.png';
import charlotte from '../../assets/images/charlotte.png';
import jordan from '../../assets/images/jordan.png';
import ethan from '../../assets/images/ethan.png';

function Courses() {

  const instructorImages = {
    'Nancy White': nancy,
    'Henry Smiths': henry,
    'Charlotte': charlotte,
    'Jordan': jordan,
    'Ethan': ethan
  };

  const courseList = [
    { name: 'UI/UX Design', image: ui, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Designing Courses', id: 'ui-ux' },
    { name: 'Graphic Design', image: graphic, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Designing Courses', id: 'graphic-design' },
    { name: 'Data Science', image: science, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'data-science' },
    { name: 'MERN Stack', image: stack, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'mern-stack' },
    { name: 'Web Development', image: web, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'web-development' },
    { name: 'Project Management', image: project, duration: '2.5 Months', price: '10,000', instructor: 'Jordan', instructorImage: instructorImages['Jordan'], category: 'Business Courses', id: 'project-management' },
    { name: 'Digital Marketing', image: digital, duration: '3 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Marketing Courses', id: 'digital-marketing' },
    { name: 'Business Analytics', image: business, duration: '3 Months', price: '10,000', instructor: 'Ethan', instructorImage: instructorImages['Ethan'], category: 'Business Courses', id: 'business-analytics' },
    { name: 'Brand Management', image: brand, duration: '1.5 Month', price: 'Free', instructor: 'Charlotte', instructorImage: instructorImages['Charlotte'], category: 'Free Courses', id: 'brand-management' },
    { name: 'Public Speaking & Presentation', image: pocket, duration: '1 Month', price: 'Free', instructor: 'Jordan', instructorImage: instructorImages['Jordan'], category: 'Free Courses', id: 'public-speaking' },
    { name: '3D Modeling & Animation', image: threeD, duration: '3 Months', price: '10,000', instructor: 'Ethan', instructorImage: instructorImages['Ethan'], category: 'Creative Arts Courses', id: '3d-modeling' },
  ];

  const [category, setCategory] = useState('All Courses');

  const filteredCourses = courseList.filter(course => 
    category === 'All Courses' || course.category === category
  );

  return (
    <div className='flex flex-row gap-20 pt-20 bg-gray-200'>
      <div className='flex'>
        <div className='flex flex-col items-start justify-start pl-20'>
          <h1 className='text-xl font-extrabold pl-12 pb-4'>OUR COURSES</h1>
          <div className='flex flex-col bg-gray-100 text-center pt-4 pb-6 pl-10 pr-10 rounded-lg shadow-2xl shadow-blue-300'>
            <p className='text-xl text-blue-950 font-bold underline pb-8'>Category</p>
            {['All Courses', 'Free Courses', 'IT Courses', 'Designing Courses', 'Marketing Courses', 'Business Courses', 'Creative Arts Courses'].map(cat => (
              <p key={cat} className='font-medium pb-6 hover:underline cursor-pointer' onClick={() => setCategory(cat)}>{cat}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 pt-10 pr-20 ">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900 flex flex-col items-center">
              <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4"/>
              <p className="text-lg w-22 text-center rounded-full text-blue-950 mb-2 bg-yellow-400 font-bold mt-2"><strong></strong> {course.price}</p>
              <h2 className="text-xl font-semibold text-center">{course.name}</h2>
              <p className="text-gray-600"><strong>Duration:</strong> {course.duration}</p>
              <div className="flex items-center gap-2 mt-2">
                <img src={course.instructorImage} alt={course.instructor} className="w-8 h-8 rounded-full"/>
                <p className="text-gray-600"><strong>By:</strong> {course.instructor}</p>
              </div>
            
              <div className='mt-4 w-full'>
                <button className='bg-yellow-400 text-blue-950 py-2 px-6 rounded-full flex items-center justify-center hover:bg-yellow-500 w-full'>
                  <IoCartOutline className="text-xl mr-2" />
                  Add to Cart
                </button>
              </div>
              <NavLink to={`/course/${course.id}`} className='mt-4 w-full'>
                <button className='text-blue-900 text-xl  border-2 border-blue-900 py-2 px-6  w-full hover:bg-gray-200 transition duration-300'>
                 VIEW COURSE
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;





