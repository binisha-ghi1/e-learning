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
    <div className=''>
      <div className='flex flex-row gap-12 pt-20 bg-blue-950 text-white'>
        <div className='flex flex-col justify-start items-start pl-20 pr-20'>
          <h1 className='text-3xl font-extrabold'>
            Empower Your Future with New Skills
            <br />
            - Learn Anytime, Anywhere!
          </h1>
          <p className='text-gray-300 font-mono pt-4'>
            Unlock your potential with our diverse courses! Learn at your own pace with expert-led lessons, and gain the skills that you need to excel in your chosen field. Start today!
          </p>
          <div className="mt-6 mb-30">
            <NavLink to="/courses">
              <Button title="Join Now" />
            </NavLink>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <img src={main} alt="Main" className="h-44" />
        </div>
      </div>

      <div className='flex flex-row relative -top-10 items-center justify-center bg-white rounded-tl-full rounded-br-full'>
        <div className='flex bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 ml-10 mt-10'>
          <img src={instructors} alt="Instructors" className="w-20 h-20" />
          <h1 className='text-white font-bold'>100+ <br />Instructors</h1>
        </div>
        <div className='flex bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 ml-10 mt-10'>
          <img src={courses} alt="Courses" className="w-20 h-20" />
          <h1 className='text-white font-bold'>500+ <br />Courses</h1>
        </div>
        <div className='flex bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 ml-10 mt-10'>
          <img src={certificate} alt="Certificate" className="w-20 h-20" />
          <h1 className='text-white font-bold'>Free <br />Certifications</h1>
        </div>
        <div className='flex bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 ml-10 mt-10'>
          <img src={students} alt="Students" className="w-20 h-20" />
          <h1 className='text-white font-bold'>1000+ <br />Students</h1>
        </div>
      </div>

      <div className='flex flex-col bg-gray-300 items-center justify-center pt-20'>
        <h1 className='text-2xl font-semibold'>Why Choose Us?</h1>
        <p className='text-center max-w-xl'>
          We offer high-quality courses, expert instructors, and flexible learning, empowering you to learn at your own pace and achieve your goals.
        </p>
      </div>

      <div className='flex flex-row gap-10 justify-center pt-12'>
        <div className='flex flex-col pl-10 bg-blue-950 text-white h-fit items-center justify-center'>
          <GrBook />
          <h1 className='text-xl font-bold pl-6 relative -top-6'>Diverse Course Options</h1>
          <p>Something for everyone, from beginners to advanced learners.</p>
        </div>
        <div className='flex flex-col pl-10 bg-blue-950 text-white h-fit items-center justify-center'>
          <BiCrown />
          <h1 className='text-xl font-bold pl-6 relative -top-6'>Affordable Pricing</h1>
          <p>Access to free resources and trial courses.</p>
        </div>
        <div className='flex flex-col pl-10 bg-blue-950 text-white h-fit items-center justify-center'>
          <TbBulb />
          <h1 className='text-xl font-bold pl-6 relative -top-6'>Flexible Learning</h1>
          <p>Access courses anytime, anywhere, at your own pace.</p>
        </div>
        <div className='flex flex-col pl-10 bg-blue-950 text-white h-fit items-center justify-center'>
          <MdOutlineVerified />
          <h1 className='text-xl font-bold pl-6 relative -top-8'>Certification Of Completion</h1>
          <p>Earn a certificate to showcase your skills and achievements.</p>
        </div>
      </div>

      <div className='flex flex-col bg-gray-300 mt-20 items-center justify-center'>
        <h1 className='text-2xl font-semibold'>Some of Our Most Popular Courses</h1>
        <h2 className='text-lg mt-4'>Explore Our Courses</h2>
      </div>

      <div className='bg-gray-300 py-12'>
        {/* Popular Courses Grid - Example */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img src={second} alt="Course Image" className='w-full h-40 object-cover mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Course 1</h3>
            <p className='text-gray-600'>Learn the basics of programming with hands-on examples and exercises.</p>
            <NavLink to="/courses/1">
              <Button title="Learn More" />
            </NavLink>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img src={second} alt="Course Image" className='w-full h-40 object-cover mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Course 2</h3>
            <p className='text-gray-600'>Master data structures and algorithms to level up your coding skills.</p>
            <NavLink to="/courses/2">
              <Button title="Learn More" />
            </NavLink>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img src={second} alt="Course Image" className='w-full h-40 object-cover mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Course 3</h3>
            <p className='text-gray-600'>Dive deep into web development and learn modern front-end technologies.</p>
            <NavLink to="/courses/3">
              <Button title="Learn More" />
            </NavLink>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img src={second} alt="Course Image" className='w-full h-40 object-cover mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Course 4</h3>
            <p className='text-gray-600'>Understand the principles of machine learning and build AI-powered projects.</p>
            <NavLink to="/courses/4">
              <Button title="Learn More" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
