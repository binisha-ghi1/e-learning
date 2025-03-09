import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { GrBook } from "react-icons/gr";
import { BiCrown } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import Team from '../Team/Team';
import Student from '../Student/Student';
import Footer from '../Footer/Footer';
import { FaRegHeart } from "react-icons/fa";


import main from '../../assets/images/main.png';
import instructors from '../../assets/images/instructors.png';
import certificate from '../../assets/images/certificate.png';
import students from '../../assets/images/students.png';
import courses from '../../assets/images/courses.png';
import second from '../../assets/images/second.png';
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

  const addToCart = (course) => {
    if (!cart.some((item) => item.id === course.id)) {
      setCart([...cart, course]);
      alert(`${course.name} added to cart!`);
    } else {
      alert(`${course.name} is already in the cart.`);
    }
  };

  const addToWishlist = (course) => {
    console.log('Current wishlist:', wishlist); 
    const courseExists = wishlist.some(item => item.id === course.id);  
    
    if (!courseExists) {
      setCart(prevWishlist => [...prevWishlist, course]);
      alert(`${course.name} added to wishlist!`);
    } else {
      alert(`${course.name} is already in the wishlist.`);
    }
  };

  return (
    <div className="bg-gray-100">
    
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-40 bg-blue-950 text-white">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold leading-tight">
            Empower Your Future with New Skills <br /> - Learn Anytime, Anywhere!
          </h1>
          <p className="text-gray-300 font-mono pt-4">
            Unlock your potential with our diverse courses! Learn at your own pace with expert-led lessons and gain the skills that you need to excel in your chosen field. Start today!
          </p>
          <NavLink to="/courses" className="mt-6 mb-20 inline-block">
            <Button title="Join Now" />
          </NavLink>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={main} alt="Learning" className="w-full max-w-md" />
        </div>
      </div>

    
      <div className="flex flex-wrap justify-center gap-10 py-10 bg-white rounded-tl-full shadow-xl  relative bottom-45">
        {[{ img: instructors, text: "100+ Instructors" }, { img: courses, text: "500+ Courses" }, { img: certificate, text: "Free Certifications" }, { img: students, text: "1000+ Students" }].map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-lg w-full sm:w-40 md:w-48 lg:w-56 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center justify-center mb-3 w-full">
              <img src={item.img} alt={`Icon representing ${item.text}`} className="w-16 h-16 object-contain mr-2" />
              <h2 className="text-lg font-bold">{item.text}</h2>
            </div>
          </div>
        ))}
      </div>

  
      <div className="text-center py-10 px-6 bg-gray-200">
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="text-gray-600 mt-3">We offer high-quality courses, expert instructors, and flexible learning, empowering you to learn at your own pace and achieve your goals.</p>
      </div>
      <div className=" bg-gray-200 flex flex-col md:flex-row items-center justify-center pr-20 gap-8 px-6 py-12">
     
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={second} alt="Why Choose Us" className="w-full max-w-md" />
        </div>

       
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ icon: <GrBook className="text-4xl text-yellow-400" />, title: "Diverse Course Options", desc: "Something for everyone, from beginners to advanced learners." },
          { icon: <BiCrown className="text-4xl text-yellow-400" />, title: "Affordable Pricing", desc: "Access to free resources and trial courses." },
          { icon: <TbBulb className="text-4xl text-yellow-400" />, title: "Flexible Learning", desc: "Access courses anytime, anywhere, at your own pace." },
          { icon: <MdOutlineVerified className="text-4xl text-yellow-400" />, title: "Certification of Completion", desc: "Earn a certificate to showcase your skills and achievements." }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
            
              <div className="flex items-center gap-3">
                {feature.icon}
                <h2 className="text-xl font-bold">{feature.title}</h2>
              </div>
              <p className="text-center mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-10 bg-gray-200">
        <p className="text-xl font-medium">Some of our most popular courses</p>
        <h1 className="text-3xl font-bold pt-4">Explore Our Courses</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-20 pr-20 pt-10 pb-8 bg-gray-200 px-6">
        {courseList.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900 flex flex-col items-center max-w-xs transform transition duration-300 hover:scale-105 hover:shadow-2xl">
           
            <img src={course.image} alt={course.name} className="w-40 h-40 object-cover rounded-lg mb-4" />

         
            <p className="text-lg text-center rounded-full text-blue-950 mb-2 bg-yellow-400 font-bold px-4 py-1">
              {course.price === "Free" ? "Free" : `${course.price}`}
            </p>

          
            <h2 className="text-xl font-semibold text-center">{course.name}</h2>
            <p className="text-gray-600">
              <strong>Duration:</strong> {course.duration}
            </p>

        
            <div className="flex items-center mt-3">
              <img src={course.instructorImage} alt={course.instructor} className="w-8 h-8 rounded-full mr-2" />
              <span>
                <strong>By, </strong>
                {course.instructor}
              </span>
            </div>
            <div className='flex flex-row items-center justify-center ml-8 '>
            <button onClick={() => addToCart(course)} className="flex items-center justify-center bg-yellow-400 text-blue-950 py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 w-40 mt-4">
              <IoCartOutline className="text-xl mr-2" />
              Add to Cart
            </button>
            <button onClick={() => addToWishlist(course)} className="flex items-center justify-center  text-blue-950  px-6 transition duration-300 ">
              <FaRegHeart className="text-xl mr-2" />
            </button>
            </div>

            <NavLink to={`/course/${course.id}`} className="mt-4 w-full">
              <button className="text-blue-900 text-xl border-2 border-blue-900 py-2 px-6 w-full hover:bg-blue-900 hover:text-white transition duration-300">
                VIEW COURSE
              </button>
            </NavLink>
          </div>
        ))}
      </div>

      <div className=' bg-gray-200 flex items-center justify-center pt-20 flex-row'>
        <Team />
      </div>

      <div className=' bg-gray-200 flex flex-col pt-20 text-center'>
        <h1 className='text-3xl font-bold'>Testimonials</h1>
        <p className='pt-4 font-mono pb-20'>“Hear from our students! Discover how our courses have empowered learners to achieve their goals and unlock new opportunities. <br />Real stories, real success!”</p>
        <div>
          <Student />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;







