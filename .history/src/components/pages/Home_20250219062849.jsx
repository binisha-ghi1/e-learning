import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { IoCartOutline } from "react-icons/io5";
import Team from '../Team/Team';
import Student from '../Student/Student';
import Footer from '../Footer/Footer';

// Image imports
import main from '../../assets/images/main.png';
import courses from '../../assets/images/courses.png';

// Instructor images
import nancy from '../../assets/images/nancy.png';
import henry from '../../assets/images/henry.png';
import charlotte from '../../assets/images/charlotte.png';
import jordan from '../../assets/images/jordan.png';
import ethan from '../../assets/images/ethan.png';

const Home = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const instructorImages = {
    'Nancy White': nancy,
    'Henry Smiths': henry,
    'Charlotte': charlotte,
    'Jordan': jordan,
    'Ethan': ethan
  };

  const courseList = [
    { name: 'UI/UX Design', image: courses, duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Designing Courses', id: 'ui-ux' },
    { name: 'Data Science', image: courses, duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'data-science' },
    { name: 'Digital Marketing', image: courses, duration: '3 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Marketing Courses', id: 'digital-marketing' },
    { name: 'Business Analytics', image: courses, duration: '3 Months', price: '10,000', instructor: 'Ethan', instructorImage: instructorImages['Ethan'], category: 'Business Courses', id: 'business-analytics' },
  ];

  const addToCart = (course) => {
    if (!cart.some(item => item.id === course.id)) {
      setCart(prevCart => [...prevCart, course]);
      alert(`${course.name} added to cart!`);
    } else {
      alert(`${course.name} is already in the cart.`);
    }
  };

  // Filtering logic
  const filteredCourses = courseList.filter(course => 
    (selectedCategory === 'All' || course.category === selectedCategory) &&
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-blue-950 text-white">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold leading-tight">
            Empower Your Future with New Skills
          </h1>
          <p className="text-gray-300 font-mono pt-4">
            Unlock your potential with our diverse courses!
          </p>
          <NavLink to="/courses" className="mt-6 inline-block">
            <Button title="Join Now" />
          </NavLink>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={main} alt="Learning" className="w-full max-w-md" />
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <input 
          type="text" 
          placeholder="Search courses..." 
          className="p-2 border rounded-md w-80" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="p-2 border rounded-md" 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Designing Courses">Designing Courses</option>
          <option value="IT Courses">IT Courses</option>
          <option value="Marketing Courses">Marketing Courses</option>
          <option value="Business Courses">Business Courses</option>
        </select>
      </div>

      {/* Course Listings */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10 pb-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900 flex flex-col items-center">
              <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4"/>
              <p className="text-lg w-22 text-center rounded-full text-blue-950 mb-2 bg-yellow-400 font-bold mt-2">
                {course.price === 'Free' ? 'Free' : `${course.price}`}
              </p>
              <h2 className="text-xl font-semibold text-center">{course.name}</h2>
              <p className="text-gray-600"><strong>Duration:</strong> {course.duration}</p>
              <div className="flex items-center gap-2 mt-2">
                <img src={course.instructorImage} alt={course.instructor} className="w-8 h-8 rounded-full"/>
                <p className="text-gray-600"><strong>By:</strong> {course.instructor}</p>
              </div>
              
              <div className='mt-4 w-full'>
                <button 
                  onClick={() => addToCart(course)} 
                  className='bg-yellow-400 text-blue-950 py-2 px-6 rounded-full flex items-center justify-center hover:bg-yellow-500 w-full'
                >
                  <IoCartOutline className="text-xl mr-2" />
                  Add to Cart
                </button>
              </div>
              <NavLink to={`/course/${course.id}`} className='mt-4 w-full'>
                <button className='text-blue-900 text-xl border-2 border-blue-900 py-2 px-6 w-full hover:bg-gray-200 transition duration-300'>
                  VIEW COURSE
                </button>
              </NavLink>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">No courses found.</p>
        )}
      </div>

      {/* Team Section */}
      <div className='flex items-center justify-center mt-20'>
        <Team/> 
      </div>

      {/* Testimonials */}
      <div className='flex flex-col mt-20 text-center'>
        <h1 className='text-3xl font-bold'>Testimonials</h1>
        <p className='pt-4 font-mono pb-20'>“Hear from our students! Real stories, real success!”</p>
        <Student/>
      </div>

      <Footer />
    </div>
  );
};

export default Home;








