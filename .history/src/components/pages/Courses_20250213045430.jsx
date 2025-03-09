import { NavLink } from 'react-router-dom';

function Courses  ()  {
  
  const courses = [
    {
      name: 'UI/UX Design',
      duration: '2.5 Months',
      price: '10,000',
      instructor: 'Nancy White',
    },
    {
      name: 'GRAPHIC DESIGN',
      duration: '2.5  Months',
      price: '10,000',
      instructor: 'Nancy White',
    },
    {
      name: 'DATA SCIENCE',
      duration: '3 Months',
      price: '10,000',
      instructor: 'Henry Smiths',
    },
    {
        name: 'MERN STACK',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Henry Smiths',
      },
      {
        name: 'WEB DEVELOPMENT',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Henry Smiths',
      },
      {
        name: 'Data Science',
        duration: '2.5 Months',
        price: '10,000',
        instructor: 'Charlotte',
      },
      {
        name: 'Project Management',
        duration: '2.5 Months',
        price: '10,000',
        instructor: 'Jordan',
      },
      {
        name: 'Digital Marketing',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Nancy White',
      },
      {
        name: 'Business Analytics ',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Ethan',
      },
      {
        name: 'Data Science',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Henry Smiths',
      },
      {
        name: 'Brand Management',
        duration: '1.5 Month',
        price: 'Free',
        instructor: 'Charlotte',
      },
      {
        name: 'Public Speaking & Presentation',
        duration: '1 Month',
        price: 'Free',
        instructor: 'Jordan',
      },
      {
        name: '3D Modeling & Animation',
        duration: '1.5 Month',
        price: 'Free',
        instructor: 'Charlotte',
      },
  ];

  return (
    <div className='flex flex-row gap-20'>
        <div className='flex items-start '>
            <h1>OUR COURSES </h1>
        </div>
    <div className="bg-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p><strong>Price:</strong> {course.price}</p>
              <h2 className="text-xl font-semibold mb-4">{course.name}</h2>
              <p><strong>Duration:</strong> {course.duration}</p> 
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <NavLink 
                to="#" 
                className="inline-block mt-4 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500"
              >
                Enroll Now
              </NavLink>
            </div>
          ))}
        </div>
        </div> 
    </div>
  );
};

export default Courses;

