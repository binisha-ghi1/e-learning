import main from '../../assets/images/main.png'
import instructors from '../../assets/images/instructors.png'
import certificate from '../../assets/images/certificate.png'
import students from '../../assets/images/students.png'
import courses from '../../assets/images/courses.png'
import second from '../../assets/images/second.png'
import { Button } from "@/components/ui/button";
import { GrBook } from "react-icons/gr";
import { BiCrown } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";
import Button from '../Button/Button'

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <div className='flex flex-row gap-20 pt-20 bg-blue-950 text-white px-20 items-center'>
        <div className='flex flex-col justify-start items-start max-w-lg'>
          <h1 className='text-4xl font-extrabold leading-tight'>Empower Your Future with New Skills <br/> - Learn Anytime, Anywhere!</h1>
          <p className='text-gray-300 font-mono pt-4'>Unlock your potential with our diverse courses! Learn at your own pace with expert-led lessons and gain the skills you need to excel in your chosen field. Start today!</p>
          <div className="mt-6  ">
                <NavLink
                 to="/menu">
                  <Button  title="Explore Food Menu"  />
                </NavLink>
              </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={main} alt='Main banner' width={300} height={300} />
        </div>
      </div>
      
      {/* Stats Section */}
      <div className='flex justify-center items-center bg-white rounded-tl-full rounded-br-full py-10 space-x-10 shadow-lg mt-[-20px]'>
        {[ 
          { img: instructors, text: '100+ Instructors' },
          { img: courses, text: '500+ Courses' },
          { img: certificate, text: 'Free Certifications' },
          { img: students, text: '1000+ Students' }
        ].map((item, index) => (
          <div key={index} className='flex flex-col items-center bg-blue-500 text-white p-6 rounded-lg shadow-md w-40 text-center'>
            <img src={item.img} alt={item.text} width={50} height={50} />
            <h1 className='font-bold mt-2'>{item.text}</h1>
          </div>
        ))}
      </div>
      
      {/* Why Choose Us Section */}
      <div className='flex flex-col bg-gray-300 items-center text-center py-10 px-6'>
        <h1 className='text-3xl font-bold'>Why Choose Us</h1>
        <p className='max-w-lg mt-2 text-gray-700'>We offer high-quality courses, expert instructors, and flexible learning, empowering you to learn at your own pace and achieve your goals.</p>
      </div>
      
      {/* Features Section */}
      <div className='flex flex-row gap-10 px-20 py-10'>
        <div className='flex-shrink-0'>
          <img src={second} alt='Learning illustration' width={300} height={300} />
        </div>
        <div className='grid grid-cols-2 gap-6'>
          {[
            { icon: <GrBook size={40} />, title: 'Diverse Course Options', text: 'Something for everyone, from beginners to advanced learners.' },
            { icon: <BiCrown size={40} />, title: 'Affordable Pricing', text: 'Access to free resources and trial courses.' },
            { icon: <TbBulb size={40} />, title: 'Flexible Learning', text: 'Access courses anytime, anywhere, at your own pace.' },
            { icon: <MdOutlineVerified size={40} />, title: 'Certification of Completion', text: 'Earn a certificate to showcase your skills and achievements.' }
          ].map((item, index) => (
            <div key={index} className='flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-lg'>
              {item.icon}
              <h1 className='text-xl font-bold mt-4'>{item.title}</h1>
              <p className='text-center mt-2'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;


