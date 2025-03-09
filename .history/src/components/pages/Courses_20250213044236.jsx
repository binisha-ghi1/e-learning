import { NavLink } from 'react-router-dom';

const Courses = () => {
  // Example data for courses
  const courses = [
    {
      name: 'UI/UX DESIGN',
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
        duration: '3 Months',
        price: '10,000',
        instructor: 'Henry Smiths',
      },
      {
        name: 'Data Science',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Henry Smiths',
      },
      {
        name: 'Data Science',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Henry Smiths',
      },
      {
        name: 'Data Science',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Henry Smiths',
      },
      {
        name: 'Data Science',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Henry Smiths',
      },
      {
        name: 'Data Science',
        duration: '3 Months',
        price: '10,000',
        instructor: 'Henry Smiths',
      },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
     
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-8">Available IT Courses</h1>
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
      </section>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 IT Training Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Courses;

