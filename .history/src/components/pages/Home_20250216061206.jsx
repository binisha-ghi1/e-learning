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

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-row gap-20 pt-20 bg-blue-950 text-white">
        <div className="flex flex-col justify-start items-start pl-20 pr-20 w-1/2">
          <h1 className="text-3xl font-extrabold">Empower Your Future with New Skills <br /> - Learn Anytime, Anywhere!</h1>
          <p className="text-gray-300 font-mono pt-4">Unlock your potential with our diverse courses! Learn at your own pace with expert-led lessons; and gain the skills that you need to excel in your chosen field. Start today!</p>
          <div className="mt-6">
            <NavLink to="/courses">
              <Button title="Join Now" />
            </NavLink>
          </div>
        </div>

        <div className="flex justify-center items-center w-1/2">
          <img src={main} alt="main" className="h-44" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-row justify-center items-center bg-white py-10 space-x-10">
        <div className="flex flex-col items-center bg-blue-400 w-fit rounded-lg shadow-2xl py-4 px-8">
          <img src={instructors} alt="Instructors" className="h-16 w-16 mb-4" />
          <h1 className="text-white font-bold">100+ <br />Instructors</h1>
        </div>
        <div className="flex flex-col items-center bg-blue-400 w-fit rounded-lg shadow-2xl py-4 px-8">
          <img src={courses} alt="Courses" className="h-16 w-16 mb-4" />
          <h1 className="text-white font-bold">500+ <br />Courses</h1>
        </div>
        <div className="flex flex-col items-center bg-blue-400 w-fit rounded-lg shadow-2xl py-4 px-8">
          <img src={certificate} alt="Certificate" className="h-16 w-16 mb-4" />
          <h1 className="text-white font-bold">Free <br />Certifications</h1>
        </div>
        <div className="flex flex-col items-center bg-blue-400 w-fit rounded-lg shadow-2xl py-4 px-8">
          <img src={students} alt="Students" className="h-16 w-16 mb-4" />
          <h1 className="text-white font-bold">1000+ <br />Students</h1>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col bg-gray-300 items-center py-10">
        <h1 className="text-2xl font-extrabold">Why Choose Us</h1>
        <p className="text-center text-gray-700">We offer high-quality courses, expert instructors, and flexible learning, empowering you to learn at your own pace and achieve your goals.</p>
      </div>

      {/* Features Section */}
      <div className="flex flex-row gap-10 justify-center items-center py-10">
        <div className="flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-lg">
          <GrBook className="text-4xl mb-4" />
          <h1 className="text-xl font-bold">Diverse Course Options</h1>
          <p className="text-center">Something for everyone, from beginners to advanced learners.</p>
        </div>
        <div className="flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-lg">
          <BiCrown className="text-4xl mb-4" />
          <h1 className="text-xl font-bold">Affordable Pricing</h1>
          <p className="text-center">Access to free resources and trial courses.</p>
        </div>
        <div className="flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-lg">
          <TbBulb className="text-4xl mb-4" />
          <h1 className="text-xl font-bold">Flexible Learning</h1>
          <p className="text-center">Access courses anytime, anywhere, at your own pace.</p>
        </div>
        <div className="flex flex-col items-center bg-blue-950 text-white p-6 rounded-lg shadow-lg">
          <MdOutlineVerified className="text-4xl mb-4" />
          <h1 className="text-xl font-bold">Certification Of Completion</h1>
          <p className="text-center">Earn a certificate to showcase your skills and achievements.</p>
        </div>
      </div>

      {/* Popular Courses Section */}
      <div className="flex flex-col bg-gray-300 py-10 items-center">
        <h1 className="text-2xl font-extrabold">Some of Our Most Popular Courses</h1>
        <h2 className="text-lg text-gray-700">Explore Our Courses</h2>
      </div>
    </div>
  );
};

export default Home;

