import { useState } from 'react';
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

// Example of instructor images
const instructorImages = {
  'Nancy White': ('../../assets/images/nancy-white.jpg'),
  'Henry Smiths': ('../../assets/images/henry-smiths.jpg'),
  'Jordan': ('../../assets/images/jordan.jpg'),
  'Ethan': ('../../assets/images/ethan.jpg'),
  'Charlotte': ('../../assets/images/charlotte.jpg'),
};

// Sample course list
const courseList = [
  { name: 'UI/UX Design', image: ('../../assets/images/ui-ux.png'), duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Designing Courses', id: 'ui-ux' },
  { name: 'Graphic Design', image: ('../../assets/images/graphic-design.png'), duration: '2.5 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Designing Courses', id: 'graphic-design' },
  { name: 'Data Science', image: ('../../assets/images/data-science.png'), duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'data-science' },
  { name: 'MERN Stack', image: ('../../assets/images/mern-stack.png'), duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'mern-stack' },
  { name: 'Web Development', image: ('../../assets/images/web-development.png'), duration: '3 Months', price: '10,000', instructor: 'Henry Smiths', instructorImage: instructorImages['Henry Smiths'], category: 'IT Courses', id: 'web-development' },
  { name: 'Project Management', image: ('../../assets/images/project-management.png'), duration: '2.5 Months', price: '10,000', instructor: 'Jordan', instructorImage: instructorImages['Jordan'], category: 'Business Courses', id: 'project-management' },
  { name: 'Digital Marketing', image: ('../../assets/images/digital-marketing.png'), duration: '3 Months', price: '10,000', instructor: 'Nancy White', instructorImage: instructorImages['Nancy White'], category: 'Marketing Courses', id: 'digital-marketing' },
  { name: 'Business Analytics', image: require('../../assets/images/business-analytics.png'), duration: '3 Months', price: '10,000', instructor: 'Ethan', instructorImage: instructorImages['Ethan'], category: 'Business Courses', id: 'business-analytics' },
  { name: 'Brand Management', image: require('../../assets/images/brand-management.png'), duration: '1.5 Month', price: 'Free', instructor: 'Charlotte', instructorImage: instructorImages['Charlotte'], category: 'Free Courses', id: 'brand-management' },
  { name: 'Public Speaking & Presentation', image: require('../../assets/images/public-speaking.png'), duration: '1 Month', price: 'Free', instructor: 'Jordan', instructorImage: instructorImages['Jordan'], category: 'Free Courses', id: 'public-speaking' },
  { name: '3D Modeling & Animation', image: require('../../assets/images/3d-modeling.png'), duration: '3 Months', price: '10,000', instructor: 'Ethan', instructorImage: instructorImages['Ethan'], category: 'Creative Arts Courses', id: '3d-modeling' },
];

const Home = () => {
  const [category, setCategory] = useState('All Courses');
  const [cart, setCart] = useState([]);

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

      <div className='flex flex-wrap items-center justify-center gap-8 px-6 py-12'>
        <div className='w-full md:w-1/2'>
          <img src={second} alt='Why Choose Us' className='w-full max-w-md mx-auto' />
        </div>
        <div className='w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[{ icon: <GrBook className='text-4xl' />, title: "Diverse Course Options", desc: "Something for everyone, from beginners to advanced learners." },
            { icon: <BiCrown className='text-4xl' />, title: "Affordable Pricing", desc: "Access to free resources and trial courses." },
            { icon: <TbBulb className='text-4xl' />, title: "Flexible Learning", desc: "Access courses anytime, anywhere, at your own pace." },
            { icon: <MdOutlineVerified className='text-4xl' />, title: "Certification of Completion", desc: "Earn a certificate to showcase your skills and achievements." }].map((feature, index) => (
            <div key={index} className='flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-lg'>
              {feature.icon}
              <h2 className='text-xl font-bold mt-4'>{feature.title}</h2>
              <p className='text-center'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Courses Section */}
      <div className='flex flex-col items-center justify-center mt-10'>
        <p className='text-xl font-medium'>Some of our most popular courses</p>
        <h1 className='text-3xl font-bold pt-4'>Explore Our Courses</h1>
      </div>

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

      <Footer />
    </div>
  );
};

export default Home;




