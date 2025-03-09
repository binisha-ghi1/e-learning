import { NavLink } from 'react-router-dom';

const Courses = () => {
  // Example data for courses
  const courses = [
    {
      name: 'Network Security',
      duration: '8 Weeks',
      price: '$499',
      instructor: 'John Doe',
    },
    {
      name: 'Cloud Computing',
      duration: '10 Weeks',
      price: '$599',
      instructor: 'Jane Smith',
    },
    {
      name: 'Data Analysis with Python',
      duration: '6 Weeks',
      price: '$399',
      instructor: 'Mike Johnson',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <nav className="flex justify-center space-x-8">
          <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>
          <NavLink to="/courses" className="hover:text-yellow-300">Courses</NavLink>
          <Link to="/instructors" className="hover:text-yellow-300">Instructors</Link>
        </nav>
      </header>

      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-8">Available IT Courses</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">{course.name}</h2>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Price:</strong> {course.price}</p>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <Link 
                to="#" 
                className="inline-block mt-4 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500"
              >
                Enroll Now
              </Link>
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

