import main from '../../assets/images/main.png'
import instructors from '../../assets/images/instructors.png'
import certificate from '../../assets/images/certificate.png'
import students from '../../assets/images/students.png'
import courses from '../../assets/images/courses.png'
import second from '../../assets/images/second.png'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import { GrBook } from "react-icons/gr";
import { BiCrown } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='flex flex-row gap-10 pt-20 bg-blue-950 text-white px-6 lg:px-20'>
        <div className='flex flex-col justify-start items-start w-1/2'>
          <h1 className='text-3xl font-extrabold leading-snug'>
            Empower Your Future with New Skills <br /> - Learn Anytime, Anywhere!
          </h1>
          <p className='text-gray-300 font-mono pt-4'>
            Unlock your potential with our diverse courses! Learn at your own pace with expert-led lessons and gain the skills you need to excel in your field. Start today!
          </p>
          <div className="mt-6">
            <NavLink to="/courses">
              <Button title="Join Now" />
            </NavLink>
          </div>
        </div>

        <div className='flex justify-center items-center w-1/2'>
          <img src={main} alt="Main" className="h-44 max-w-full object-contain" />
        </div>
      </div>

      {/* Stats Section */}
      <div className='flex flex-row justify-around items-center relative -top-10 bg-white p-6 rounded-tl-full rounded-br-full'>
        <div className='flex flex-col items-center bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 p-4'>
          <img src={instructors} alt="Instructors" className="w-16 h-16" />
          <h1 className='text-white font-bold text-center'>
            100+ <br />Instructors
          </h1>
        </div>
        <div className='flex flex-col items-center bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 p-4'>
          <img src={courses} alt="Courses" className="w-16 h-16" />
          <h1 className='text-white font-bold text-center'>
            500+ <br />Courses
          </h1>
        </div>
        <div className='flex flex-col items-center bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 p-4'>
          <img src={certificate} alt="Certifications" className="w-16 h-16" />
          <h1 className='text-white font-bold text-center'>
            Free <br />Certifications
          </h1>
        </div>
        <div className='flex flex-col items-center bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 p-4'>
          <img src={students} alt="Students" className="w-16 h-16" />
          <h1 className='text-white font-bold text-center'>
            1000+ <br />Students
          </h1>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='flex flex-col items-center justify-center bg-gray-300 py-12'>
        <h1 className='text-2xl font-bold'>Why Choose Us</h1>
        <p className='text-center text-gray-700'>
          We offer high-quality courses, expert instructors, and flexible learning, empowering you to learn at your own pace and achieve your goals.
        </p>
      </div>

      {/* Features Section */}
    

      {/* Popular Courses Section */}
      <div className='flex flex-col items-center justify-center bg-gray-300 py-12'>
        <h1 className='text-2xl font-bold'>Some of Our Most Popular Courses</h1>
        <h2 className='text-xl'>Explore Our Courses</h2>
      </div>
    </div>
  );
}

export default Home;



