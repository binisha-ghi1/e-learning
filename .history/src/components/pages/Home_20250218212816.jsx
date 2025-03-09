import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { GrBook } from "react-icons/gr";
import { BiCrown } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";
import Footer from '../Footer/Footer';
import main from '../../assets/images/main.png';
import second from '../../assets/images/second.png';

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

const Home = () => {
  const [cart, setCart] = useState([]);

  const instructorImages = {
    'Nancy White': nancy,
    'Henry Smiths': henry,
    'Charlotte': charlotte,
    'Jordan': jordan,
    'Ethan': ethan,
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

  // Add course to cart
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

      {/* Statistics Section */}
      <div className='flex flex-wrap justify-center gap-8 py-10 bg-white'>
        {[{ img: instructors, text: "100+ Instructors" }, { img: courses, text: "500+ Courses" }, { img: certificate, text: "Free Certifications" }, { img: students, text: "1000+ Students" }].map((item, index) => (
          <div key={index} className='flex flex-col items-center bg-blue-500 text-white p-6 rounded-lg shadow-lg w-40'>
            <img src={item.img} alt={item.text} className='w-16 mb-3' />
            <h2 className='text-lg font-bold text-center'>{item.text}</h2>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className='text-center py-10 px-6'>
        <h1 className='text-3xl font-bold'>Why Choose Us</h1>
        <p className='text-gray-600 mt-3'>We offer high-quality courses, expert instructors, and flexible learning, empowering you to learn at your own pace and achieve your goals.</p>
      </div>

      {/* Popular Courses Section */}
      <div className='flex flex-col items-center justify-center mt-10'>
        <p className='text-xl font-medium'>Some of our most popular courses</p>
        <h1 className='text-3xl font-bold pt-4'>Explore Our Courses</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 pt-10 pb-8">
        {courseList.map(course => (
          <div key={course.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900 flex flex-col items-center max-w-xs">
            <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4"/>
            <p className="text-lg text-center rounded-full text-blue-950 mb-2 bg-yellow-400 font-bold mt-2">
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
                Add to Cart
              </button>
            </div>
            <NavLink to={`/course/${course.id}`} className='mt-4 w-full'>
              <button className='text-blue-900 text-xl border-2 border-blue-900 py-2 px-6 w-full hover:bg-gray-200 transition duration-300'>
                VIEW COURSE
              </button>
            </NavLink>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;




