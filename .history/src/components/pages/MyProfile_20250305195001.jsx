import React, { useState, useEffect } from 'react';
import { auth } from "../../firebase/firebaseConfig";
import rec from '../../assets/images/rec.png';
import tag from '../../assets/images/tag.png';
import { PiBookOpenTextBold } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiSolidTrophy } from "react-icons/bi";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [enrolledCount, setEnrolledCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }

    // Fetch course counts from localStorage
    const savedEnrolled = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    const savedActive = JSON.parse(localStorage.getItem('activeCourses')) || [];
    const savedCompleted = JSON.parse(localStorage.getItem('completedCourses')) || [];

    setEnrolledCount(savedEnrolled.length);
    setActiveCount(savedActive.length);
    setCompletedCount(savedCompleted.length);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full flex justify-center bg-gray-200">
        <div className="w-full h-full mt-20 ml-10 mr-10 flex flex-col items-start md:items-center justify-center bg-center px-6 py-16 text-white rounded-xl relative"
          style={{ backgroundImage: `url(${rec})`, backgroundSize: 'cover' }}>
          <h2 className="text-4xl font-bold mb-6 text-left md:text-center">
            Welcome back, <br />
            <img src={user.photoURL || "https://via.placeholder.com/150"} 
                 alt="User Profile" 
                 className="w-16 h-16 mt-2 rounded-full object-cover inline-block" />
            <br/>
            <span className=" text-blue-300">{user.displayName}</span>
          </h2>

          <p className="text-left md:text-center text-lg leading-relaxed max-w-2xl">
            We’re excited to have you here! Dive into your learning journey and make progress  
            toward your goals. Check your tasks and continue where you left off!
          </p>
          <div className="absolute -top-20 right-6">
            <img src={tag} alt="Tag" className="w-32 md:w-32 lg:w-40" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="w-full pt-16 flex justify-center gap-16 pb-20 bg-gray-200">
        <div className="flex flex-col items-center text-center pb-20 pl-8 pr-8 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400">
          <PiBookOpenTextBold className="text-5xl mb-2 text-blue-500" />
          <h1 className="text-2xl pt-8 font-semibold">Enrolled Courses</h1>
        
        </div>
        <div className="flex flex-col items-center text-center pb-20 pl-10 pr-10 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400">
          <RiGraduationCapFill className="text-5xl mb-2 text-green-500" />
          <p className="text-xl font-bold">{activeCount}</p>
          <h1 className="text-2xl pt-8 font-semibold">Active Courses</h1>
         
        </div>
        <div className="flex flex-col items-center text-center pb-20 pl-5 pr-5 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400">
          <BiSolidTrophy className="text-5xl mb-2 text-yellow-500" />
          <p className="text-xl font-bold">{completedCount}</p>
          <h1 className="text-2xl pt-8 font-semibold">Completed Courses</h1>
          
        </div>
      </div>
    </>
  );
};

export default MyProfile;






