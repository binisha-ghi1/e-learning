import rec from '../../assets/images/rec.png';
import tag from '../../assets/images/tag.png';
import { PiBookOpenTextBold } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiSolidTrophy } from "react-icons/bi";
import React, { useState, useEffect } from 'react';
import { auth } from "../../firebase/firebaseConfig";



const MyProfile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser); // Set the user state with current user data
    }
  }, []); // Empty array ensures this effect runs only once when the component mounts

  // Show loading state while fetching user info
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full flex justify-center bg-gray-200">
        <div
          className="w-full h-full mt-20 ml-10 mr-10 flex flex-col items-start md:items-center justify-center bg-center px-6 py-16 text-white rounded-xl relative"
          style={{ backgroundImage: `url(${rec})`, backgroundSize: 'cover' }}
        >
         <h2 className="text-4xl font-bold mb-6 text-left md:text-center">
  Welcome back, <br />
  <img 
    src={user.photoURL } 
    alt="User Profile" 
    className="w-16 h-16 mt-2 rounded-full object-cover inline-block" 
  /> <br/>
  <span className=" text-blue-300">{user.displayName}</span>
</h2>

          <p className="text-left md:text-center text-lg leading-relaxed max-w-2xl">
            We’re excited to have you here! Dive into your learning journey and make progress  
            toward your goals. Remember, every step counts! <br />
            Check your tasks for today and continue where you left off. Let’s make this a productive session! 
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
          <h1 className="text-2xl  pt-8 font-semibold">Enrolled Courses</h1>
        </div>
        <div className="flex flex-col items-center text-center pb-20 pl-10 pr-10 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400">
          <RiGraduationCapFill className="text-5xl mb-2 text-green-500" />
          <h1 className="text-2xl pt-8 font-semibold">Active Courses</h1>
        </div>
        <div className="flex flex-col items-center text-center pb-20 pl-5 pr-5 pt-10 bg-white rounded-lg shadow-2xl shadow-gray-400">
          <BiSolidTrophy className="text-5xl mb-2 text-yellow-500" />
          <h1 className="text-2xl pt-8 font-semibold">Completed Courses</h1>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default MyProfile;





