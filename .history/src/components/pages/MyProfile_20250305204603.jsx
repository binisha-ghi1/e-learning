import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/firebaseConfig";
import rec from "../../assets/images/rec.png";
import tag from "../../assets/images/tag.png";
import { PiBookOpenTextBold } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiSolidTrophy } from "react-icons/bi";
import { doSignInWithEmailAndPassword, doSigninWithGoogle } from "../../firebase/auth";


const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [enrolledCount, setEnrolledCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [role, setRole] = useState('student'); // Assume 'student' by default

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        
        // Get role from user (could be from a database or Firebase)
        setRole(currentUser.role || 'student'); // Assuming role is saved in user object
        
        // Call the appropriate sign-in function and fetch course data
        const { coursesData } = await doSignInWithEmailAndPassword(currentUser.email, "user_password_here");
        
        if (coursesData) {
          setEnrolledCount(coursesData.enrolledCourses?.length || 0);
          setActiveCount(coursesData.activeCourses?.length || 0);
          setCompletedCount(coursesData.completedCourses?.length || 0);
        }
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      {/* Profile Header */}
      <div className="w-full flex justify-center bg-gray-200">
        <div
          className="w-full h-full mt-20 ml-10 mr-10 flex flex-col items-start md:items-center justify-center bg-center px-6 py-16 text-white rounded-xl relative"
          style={{ backgroundImage: `url(${rec})`, backgroundSize: "cover" }}
        >
          <h2 className="text-4xl font-bold mb-6 text-left md:text-center">
            Welcome back,
            <span className="block text-blue-300"> {user.displayName || "User"}</span>
          </h2>
          
          {/* Profile Picture */}
          <div className="flex justify-center mt-4">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="User Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <p className="text-left md:text-center text-lg leading-relaxed max-w-2xl mt-4">
            We’re excited to have you here! Dive into your learning journey and make progress toward your goals. Check your tasks and continue where you left off!
          </p>

          <div className="absolute -top-20 right-6">
            <img src={tag} alt="Tag" className="w-32 md:w-32 lg:w-40" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="w-full pt-16 flex flex-wrap justify-center gap-10 pb-20 bg-gray-200">
        {/* Enrolled Courses */}
        <div className="flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-2xl">
          <PiBookOpenTextBold className="text-5xl mb-2 text-blue-500" />
          <p className="text-2xl font-bold">{enrolledCount}</p>
          <h1 className="text-xl font-semibold mt-2">Enrolled Courses</h1>
        </div>

        {/* Active Courses */}
        <div className="flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-2xl">
          <RiGraduationCapFill className="text-5xl mb-2 text-green-500" />
          <p className="text-2xl font-bold">{activeCount}</p>
          <h1 className="text-xl font-semibold mt-2">Active Courses</h1>
        </div>

        {/* Completed Courses */}
        <div className="flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-2xl">
          <BiSolidTrophy className="text-5xl mb-2 text-yellow-500" />
          <p className="text-2xl font-bold">{completedCount}</p>
          <h1 className="text-xl font-semibold mt-2">Completed Courses</h1>
        </div>
      </div>
    </>
  );
};

export default MyProfile;






