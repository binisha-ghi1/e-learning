import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/firebaseConfig";
import rec from "../../assets/images/rec.png";
import tag from "../../assets/images/tag.png";
import { PiBookOpenTextBold } from "react-icons/pi";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiSolidTrophy } from "react-icons/bi";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";
import MyCourses from "./MyCourses";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [enrolledCount, setEnrolledCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [role, setRole] = useState("student");

  useEffect(() => {
    const fetchData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        setRole(currentUser.role || "student");

        const savedEnrolled = localStorage.getItem("enrolledCourses");
        const savedActive = localStorage.getItem("activeCourses");
        const savedCompleted = localStorage.getItem("completedCourses");

        if (savedEnrolled) setEnrolledCount(JSON.parse(savedEnrolled).length);
        if (savedActive) setActiveCount(JSON.parse(savedActive).length);
        if (savedCompleted) setCompletedCount(JSON.parse(savedCompleted).length);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <div className="w-full flex justify-center bg-gray-200">
        <div
          className="w-full h-full mt-20 ml-10 mr-10 flex flex-col items-start md:items-center justify-center bg-center px-6 py-16 text-white rounded-xl relative"
          style={{ backgroundImage: `url(${rec})`, backgroundSize: "cover" }}
        >
          <h2 className="text-4xl font-bold mb-6 text-left md:text-center">
            Welcome back,
            <span className="block text-blue-300"> {user.displayName || "User"}</span>
          </h2>

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

      <div className="w-full pt-16 flex flex-wrap justify-center gap-5 pb-20 bg-gray-200">
        <div className="flex flex-col items-center text-center p-20 bg-white rounded-lg shadow-2xl">
          <PiBookOpenTextBold className="text-5xl mb-2 text-blue-500" />
          <p className="text-3xl  pt-4 font-bold">{enrolledCount}</p>
          <p className="pt-4 text-2xl font-bold text-blue-950">Enrolled Courses</p>
        </div>

        <div className="flex flex-col items-center text-center p-20 bg-white rounded-lg shadow-2xl">
          <RiGraduationCapFill className="text-5xl mb-2 text-green-500" />
          <p className="text-3xl font-bold">{activeCount}</p>
          <p className="pt-4 text-2xl font-bold text-blue-950">Active Courses</p>
        </div>

        <div className="flex flex-col items-center text-center p-20 bg-white rounded-lg shadow-2xl">
          <BiSolidTrophy className="text-5xl mb-2 text-yellow-500" />
          <p className="text-3xl font-bold">{completedCount}</p>
          <p className="pt-4 text-2xl font-bold text-blue-950">Completed Courses</p>
        </div>
      </div>
    </>
  );
};

export default MyProfile;






