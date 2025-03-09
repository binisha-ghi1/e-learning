import { useState } from "react";
import { FaUser, FaBook, FaHeart, FaTasks, FaVideo, FaComments, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";


const getYouTubeVideoId = (url) => {
   try {
     const videoId = new URL(url).searchParams.get("v");
     return videoId;
  } catch (error) {
    console.error("Invalid video URL:", url);
    return null;
 }
 };





const sections = [
  { name: "My Profile", icon: <FaUser /> },
  { name: "My Courses", icon: <FaBook /> },
  { name: "Wishlist", icon: <FaHeart /> },
  { name: "Tasks", icon: <FaTasks /> },
  { name: "Courses Videos", icon: <FaVideo /> },
  { name: "Feedback", icon: <FaComments /> },
  { name: "Messages", icon: <FaEnvelope /> },
  { name: "Settings", icon: <FaCog /> },
  { name: "Logout", icon: <FaSignOutAlt />, className: "text-red-500" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("My Profile");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveSection(section.name)}
                className={`flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700 rounded ${
                  activeSection === section.name ? "bg-gray-700" : ""
                } ${section.className || ""}`}
              >
                {section.icon}
                <span>{section.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        {activeSection === "My Profile" && <h1 className="text-2xl">👤 Profile Section</h1>}
        <p>my profile</p>
        {activeSection === "My Courses" && <h1 className="text-2xl">📚 My Courses</h1>}
        {activeSection === "Wishlist" && <h1 className="text-2xl">❤️ Wishlist</h1>}
        {activeSection === "Tasks" && <h1 className="text-2xl">📋 Tasks</h1>}
        {activeSection === "Courses Videos" && (
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
                   );
                   })}
               </div>
             </div>
             )}
        {activeSection === "Feedback" && <h1 className="text-2xl">💬 Feedback</h1>}
        {activeSection === "Messages" && <h1 className="text-2xl">📩 Messages</h1>}
        {activeSection === "Settings" && <h1 className="text-2xl">⚙️ Settings</h1>}
        {activeSection === "Logout" && <h1 className="text-2xl text-red-500">🚪 Logging Out...</h1>}
      </div>
    </div>
  );
};

export default Sidebar;



