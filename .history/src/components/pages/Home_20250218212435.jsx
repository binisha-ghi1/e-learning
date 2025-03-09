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

const Home = () => {
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
      
      <div className='flex flex-wrap  items-center justify-center gap-8 px-6 py-12'>
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
        <div className='flex fle'>
          <p>Some of our most popular courses</p>
          <h1>Explore Our Courses</h1>
          

        </div>
      </div>
      <Footer/>
    </div>
  );                              
};

export default Home;




