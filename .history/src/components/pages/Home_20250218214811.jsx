import { useState } from 'react'; // Import useState
import main from '../../assets/images/main.png';
import instructors from '../../assets/images/instructors.png';
import certificate from '../../assets/images/certificate.png';
import students from '../../assets/images/students.png';
import courses from '../../assets/images/courses.png';
import second from '../../assets/images/second.png';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { GrBook } from "react-icons/gr";
import { BiCrown } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";
import Footer from '../Footer/Footer';

// Import course images
import ui from '../../assets/images/ui.png';
import graphic from '../../assets/images/graphic.png';
import science from '../../assets/images/science.png';
import web from '../../assets/images/web.png';
import project from '../../assets/images/project.png';
import digital from '../../assets/images/digital.png';
import brand from '../../assets/images/brand.png';
import pocket from '../../assets/images/pocket.png';
import threeD from '../../assets/images/threeD.png';
import stack from '../../assets/images/stack.png';
import business from '../../assets/images/business.png';

// Import instructor images
import nancy from '../../assets/images/nancy.png';
import henry from '../../assets/images/henry.png';
import charlotte from '../../assets/images/charlotte.png';
import jordan from '../../assets/images/jordan.png';
import ethan from '../../assets/images/ethan.png';

const instructorImages = {
  'Nancy White': nancy,
  'Henry Smiths': henry,
  'Charlotte': charlotte,
  'Jordan': jordan,
  'Ethan': ethan
};
const Courses = ({ cart, setCart }) => {
  

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

  // State for category selection
  const [category, setCategory] = useState('All Courses');
  const [cart, setCart] = useState([]);

  // Filter courses based on selected category
  const filteredCourses = courseList.filter(course =>
    category === 'All Courses' || course.category === category
  );

  const addToCart = (course) => {
    if (!cart.some(item => item.id === course.id)) {
      setCart([...cart, course]);
      alert(`${course.name} added to cart!`);
    } else {
      alert(`${course.name} is already in the cart.`);
    }
  };

  return (
    <div className='bg-gray-100'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-blue-950 text-white'>
        <div className='md:w-1/2'>
          <h1 className='text-4xl font-extrabold leading-tight'>
            Empower Your Future with New Skills <br /> - Learn Anytime, Anywhere!
          </h1>
          <p className='text-gray-300 font-mono pt-4'>
            Unlock your potential with our diverse courses! Learn at your own pace with expert-led lessons and gain the skills that you need to excel in your chosen field. Start today!
          </p>
          <NavLink to="/courses" className='mt-6 inline-block'>
            <Button title="Join Now" />
          </NavLink>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img src={main} alt='Learning' className='w-full max-w-md' />
        </div>
      </div>

      {/* Category Filters */}
      <div className='flex justify-center py-5'>
        <button onClick={() => setCategory('All Courses')} className='mx-2 bg-blue-500 text-white px-4 py-2 rounded-md'>
          All Courses
        </button>
        <button onClick={() => setCategory('Designing Courses')} className='mx-2 bg-blue-500 text-white px-4 py-2 rounded-md'>
          Designing Courses
        </button>
        <button onClick={() => setCategory('IT Courses')} className='mx-2 bg-blue-500 text-white px-4 py-2 rounded-md'>
          IT Courses
        </button>
        <button onClick={() => setCategory('Business Courses')} className='mx-2 bg-blue-500 text-white px-4 py-2 rounded-md'>
          Business Courses
        </button>
        <button onClick={() => setCategory('Free Courses')} className='mx-2 bg-blue-500 text-white px-4 py-2 rounded-md'>
          Free Courses
        </button>
      </div>

      {/* Courses */}
      <div className="flex flex-wrap justify-center gap-8 pt-10 pb-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900 flex flex-col items-center max-w-xs">
            <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4" />
            <p className="text-lg text-center rounded-full text-blue-950 mb-2 bg-yellow-400 font-bold mt-2">
              {course.price === 'Free' ? 'Free' : `${course.price}`}
            </p>
            <h2 className="text-xl font-semibold text-center">{course.name}</h2>
            <p className="text-gray-600"><strong>Duration:</strong> {course.duration}</p>
            <div className="flex items-center mt-2">
              <img src={course.instructorImage} alt={course.instructor} className="w-8 h-8 rounded-full mr-2" />
              <span>{course.instructor}</span>
            </div>
            <button
              className="mt-4 bg-blue-950 text-white py-2 px-6 rounded-lg"
              onClick={() => addToCart(course)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Courses;




