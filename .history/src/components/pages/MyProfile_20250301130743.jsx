import React from 'react';
import { useUser } from './UserContext';  // Import the useUser hook
import rec from '../../assets/images/rec.png';
import tag from '../../assets/images/tag.png';
import { PiBookOpenTextBold } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiSolidTrophy } from "react-icons/bi";

const MyProfile = () => {
  const { userData } = useUser();  // Access the user data from the context

  return (
    <>
      <div className="w-full flex justify-center bg-gray-200">
        <div
          className="w-full h-full mt-40 ml-10 mr-10 flex flex-col items-start md:items-center justify-center bg-center px-6 py-16 text-white rounded-xl relative"
          style={{ backgroundImage: `url(${rec})`, backgroundSize: 'cover' }}
        >
          <h2 className="text-4xl font-bold mb-6 text-left md:text-center">
            Welcome back, <br /> <span className="text-blue-300">{userData.firstName} {userData.lastName}</span>
          </h2>

          <p className="text-left md:text-center text-lg leading-relaxed max-w-2xl">
            We’re excited to have you here! Dive into your learning journey and make progress toward your goals. 
          </p>
          <div className="absolute -top-20 right-6">
            <img src={tag} alt="Tag" className="w-32 md:w-32 lg:w-40" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="w-full pt-16 flex justify-center gap-16 pb-20 bg-gray-200">
        {/* Courses and achievements sections */}
      </div>

      {/* Display user info */}
      <div>
        <h1>My Info</h1>
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Location:</strong> {userData.location}</p>
        <p><strong>Skills:</strong> {userData.skill}</p>
        <p><strong>Biography:</strong> {userData.biography}</p>
      </div>
    </>
  );
};

export default MyProfile;






