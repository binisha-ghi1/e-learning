import main from '../../assets/images/main.png'
import instructors from '../../assets/images/instructors.png'
import courses from '../../assets/images/courses.png'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Home = () => {
  return (
    <div className=''>
      <div className='flex flex-row gap-60 pt-20 bg-blue-950 text-white'>
        <div className='flex flex-col justify-start items-start pl-20 pr-20'>
        <h1 className='text-3xl font-extrabold'>Empower Your Future with New Skills <br/> -Learn Anytime, Anywhere!</h1>
        <p className='text-gray-300 font-mono pt-4'>Unlock your potential with our diverse courses! Learn at your own pace with expert-led lessons; and gain the skills that you need to excel in your chosen field. Start today! </p>
        <div className="mt-6  ">
                <NavLink
                 to="/courses">
                  <Button  title="Join Now"  />
                </NavLink>
              </div>
              </div>
            
              <div className='flex justify-center items-center'>
                <img src={main}sizes='64' className="h-44 " />
                </div>
      </div>
      <div className=' flex flex-row  bg-white rounded-tl-full rounded-br-full '>
        <div className='flex bg-blue-400 w-fit rounded-lg ml-10 mt-10'>
          <img src={instructors} sizes={32} alt="" className="" />
          <h1 className='text-white font-bold'>100+ <br/>Instructors</h1>
        </div>
        <div className='flex bg-blue-400 w-fit rounded-lg ml-10 mt-10'>
          <img src={courses} alt="" className="src" />
          <h1 className='text-white font-bold'>500+ <br/>Courses</h1>
        </div>
        <div>
          <img src="" alt="" className="src" />
          <h1>F</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
