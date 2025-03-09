// import { useState } from "react";
// import { FaUser, FaBook, FaHeart, FaTasks, FaMap, FaComments, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";
// import { courseList } from "./CourseDetail"; 
// import rec from '../../assets/images/rec.png';
// import tag from '../../assets/images/tag.png';
// import Footer from '../Footer/Footer';

// // Utility function to extract video ID from YouTube URL
// const getYouTubeVideoId = (url) => {
//   try {
//     const videoId = new URL(url).searchParams.get("v");
//     return videoId;
//   } catch (error) {
//     console.error("Invalid video URL:", url);
//     return null;
//   }
// };

// const Dashboard = () => {
//   const [activeSection, setActiveSection] = useState("My Profile");
//   const [enrolledCourses, setEnrolledCourses] = useState([]); // This is to store enrolled courses

//   const sections = [
//     { name: "My Profile", icon: <FaUser /> },
//     { name: "My Courses", icon: <FaBook /> },
//     { name: "Wishlist", icon: <FaHeart /> },
//     { name: "Tasks", icon: <FaTasks /> },
//     { name: "Courses Videos", icon: <FaMap /> },
//     { name: "Feedback", icon: <FaComments /> },
//     { name: "Messages", icon: <FaEnvelope /> },
//   ];

//   return (
//     <div>
//     <div className="flex h-screen mt-20 rounded-3xl">
//       {/* Sidebar */}
//       <div className="w-64 bg-white text-blue-950 flex flex-col justify-between p-6 shadow-lg">
//         <div>
//           <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
//           <nav className="space-y-4">
//             {sections.map((section) => (
//               <button
//                 key={section.name}
//                 onClick={() => setActiveSection(section.name)}
//                 className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${
//                   activeSection === section.name ? "bg-blue-700 text-white" : "hover:bg-blue-800 hover:text-white"
//                 }`}
//               >
//                 {section.icon}
//                 {section.name}
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="space-y-4 mt-auto">
//           <button
//             onClick={() => setActiveSection("Settings")}
//             className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all duration-300 ${
//               activeSection === "Settings" ? "bg-blue-700 text-white" : "hover:bg-blue-800 text-white"
//             }`}
//           >
//             <FaCog />
//             Settings
//           </button>
//           <button className="flex items-center gap-3 p-3 rounded-lg w-full text-left bg-red-600 hover:bg-red-700 text-white cursor-pointer transition-all duration-300">
//             <FaSignOutAlt />
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="flex-1 p-6 overflow-auto">
//         {/* Conditionally render profile section only for "My Profile" */}
//         {activeSection === "My Profile" && (
//           <div
//             className="min-w-fit rounded-2xl flex flex-col items-start justify-start bg-cover bg-center px-6 text-white"
//             style={{ backgroundImage: `url(${rec})` }}
//           >
//             <h2 className="text-3xl font-bold pt-6 mb-6">Welcome back, Name</h2>
//             <p className="text-start mb-6">
//               We’re excited to have you here. Dive into your learning journey<br /> and make progress
//               toward your goals. Check your tasks for<br /> today and continue where you left off.
//             </p>

//             {/* Profile Image or Avatar */}
//             <div className="mb-6">
//               <img src="https://via.placeholder.com/150" alt="User Profile" className="rounded-full w-32 h-32 border-4 border-white" />
//             </div>

//             <img src={tag} alt="Tag" className="absolute bottom-70 right-30 w-62" />
//           </div>
//         )}

//         {/* Active Section Content */}
//         <div className="mt-10">
//           <h2 className="text-3xl font-bold mb-6">{activeSection}</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             {/* My Courses Section */}
//             {activeSection === "My Courses" && enrolledCourses.length > 0 && (
//               <div className="flex flex-wrap gap-6">
//                 {enrolledCourses.map((courseId) => {
//                   const enrolledCourse = courseList.find((course) => course.id === courseId);
//                   return (
//                     <div key={courseId} className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3">
//                       <img
//                         className="w-full h-56 object-cover"
//                         src={enrolledCourse.image}
//                         alt={enrolledCourse.name}
//                       />
//                       <div className="p-4">
//                         <h2 className="mt-4 text-center bg-blue-500 text-white rounded py-2 w-full">
//                           {enrolledCourse.name}
//                         </h2>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//             {activeSection === "My Courses" && enrolledCourses.length === 0 && (
//               <p className="text-gray-600">You have not enrolled in any courses yet.</p>
//             )}

//             {/* Courses Videos Section */}
//             {activeSection === "Courses Videos" && (
//               <div className="flex flex-wrap gap-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                   {courseList.map((course, index) => {
//                     const videoId = getYouTubeVideoId(course.video);
//                     return (
//                       <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
//                         <img
//                           className="w-full h-56 object-cover"
//                           src={course.image}
//                           alt={course.name}
//                         />
//                         <div className="p-4">
//                           <h2 className="mt-4 text-center bg-blue-500 text-white rounded py-2 w-full">
//                             {course.name}
//                           </h2>

//                           {/* Video Embedding */}
//                           {videoId ? (
//                             <iframe
//                               className="mt-4 w-full h-32"
//                               src={`https://www.youtube.com/embed/${videoId}`}
//                               title={course.name}
//                               frameBorder="0"
//                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                               allowFullScreen
//                             ></iframe>
//                           ) : (
//                             <p className="text-red-500 mt-4">No video available for this course.</p>
//                           )}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* Feedback and Messages Section */}
//             {activeSection === "Feedback" || activeSection === "Messages" ? (
//               <p className="text-gray-600">
//                 Content for <strong>{activeSection}</strong> will be displayed here.
//               </p>
//             ) : null}
//           </div>
//         </div>
//       </div>
//       </div>
//       <Footer />
//     </div>
   
    
//   );
// };

// export default Dashboard;




import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import MyProfile from "../components/Sidebar/MyProfile";
import MyTasks from "../components/Sidebar/MyTasks";
import Wishlist from './components/Sidebar/Wishlist';
import CourseVideos from "../components/Sidebar/CourseVideos";
import Feedback from "../pages/Feedback";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";

const Dashboard = () => {
  const handleLogout = () => {
    console.log("User logged out");
    // Add logout logic (e.g., clear localStorage, redirect to login)
  };

  return (
    <div className="flex">
      {/* Sidebar Appears Only on Dashboard */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-5">
        <Routes>
          <Route path="profile" element={<MyProfile />} />
          <Route path="tasks" element={<MyTasks />} />
          <Route path="videos" element={<CourseVideos />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;













