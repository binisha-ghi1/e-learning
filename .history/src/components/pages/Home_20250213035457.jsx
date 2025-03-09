import main from '../../assets/images/main.png'
import instructors from '../../assets/images/instructors.png'
import certificate from '../../assets/images/certificate.png'
import students from '../../assets/images/students.png'
import courses from '../../assets/images/courses.png'
import second from '../../assets/images/second.png'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import { GrBook } from "react-icons/gr";

const Home = () => {
  return (
    <div className=''>
      <div className='flex flex-row gap-60 pt-20 bg-blue-950   text-white'>
        <div className='flex flex-col justify-start items-start pl-20 pr-20'>
        <h1 className='text-3xl font-extrabold'>Empower Your Future with New Skills <br/> -Learn Anytime, Anywhere!</h1>
        <p className='text-gray-300 font-mono pt-4'>Unlock your potential with our diverse courses! Learn at your own pace with expert-led lessons; and gain the skills that you need to excel in your chosen field. Start today! </p>
        <div className="mt-6 mb-30 ">
                <NavLink 
                 to="/courses">
                  <Button  
                  title="Join Now"  />
                </NavLink>
              </div>
              </div>
            
              <div className='flex justify-center items-center'>
                <img src={main}sizes='64' className="h-44 " />
                </div>
      </div>
      <div className=' flex flex-row  relative -top-10 items-center justify-center bg-white rounded-tl-full rounded-br-full '>
        <div className='flex bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 ml-10 mt-10'>
          <img src={instructors} sizes={32} alt="" className="" />
          <h1 className='text-white font-bold'>100+ <br/>Instructors</h1>
        </div>
        <div className='flex bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 ml-10 mt-10'>
          <img src={courses} alt="" className="src" />
          <h1 className='text-white font-bold'>500+ <br/>Courses</h1>
        </div>
        <div className='flex bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 ml-10 mt-10'>
          <img src={certificate} alt="" className="src" />
          <h1 className='text-white font-bold'>Free <br/>Certifications</h1>
        </div>
        <div className='flex bg-blue-400 w-fit rounded-lg shadow-2xl shadow-blue-400 ml-10 mt-10'>
          <img src={students} alt="" className="src" />
          <h1 className='text-white font-bold'>1000+ <br/>Students</h1>
        </div>
      </div>
      <div className='flex flex-col  bg-gray-300 items-center justify-center '>
        <h1>Why Choose Us</h1>
        <p>We offer high-quality  courses, expert instructors, and flexible learning, empowering you to learn at your own pace and achieve your goals. </p>
      </div>
      <div className='flex flex-row'>
        <div className='flex items-start justify-start'>
          <img src={second} alt="" className="src" />
        </div>
        <div className='flex flex-col  pl-10 bg-blue-950 text-white h-fit items-center-justify-center'>
        <GrBook />
        <h1 className='text-xl font-bold pl-6 relative -top-6'>Diverse Course Options</h1>
        <p className=''>Something for everyone,<br/> from beginners to <br/>advanced learners.</p>
        </div>
        <div>
          <h1>Affordable Pricing</h1>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Home
