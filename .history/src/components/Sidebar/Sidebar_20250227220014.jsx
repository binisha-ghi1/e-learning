// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaUser,
//   FaTasks,
//   FaVideo,
//   FaComments,
//   FaCog,
//   FaSignOutAlt,
//   FaBook,
//   FaEnvelope,  // Updated icon for messages
// } from "react-icons/fa";

// const Sidebar = ({ onLogout }) => {
//   const menuItems = [
//     { icon: FaUser, label: "My Profile", href: "/profile" },
//     { icon: FaTasks, label: "My Tasks", href: "/tasks" },
//     { icon: FaVideo, label: "Course Videos", href: "/videos" },
//     { icon: FaBook, label: "Assignments", href: "/assignments" },
//     { icon: FaComments, label: "Feedback", href: "/feedback" },
//     { icon: FaEnvelope, label: "Messages", href: "/messages" },
//     { icon: FaCog, label: "Settings", href: "/settings" },
//   ];

//   return (
//     <div className="flex flex-col h-screen w-64 bg-gray-100 border-r shadow-sm">
//       {/* Profile Section */}
//       <div className="p-4 border-b">
//         <h3 className="font-medium text-gray-800">DASHBOARD</h3>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="flex-1 overflow-y-auto">
//         <ul className="p-2 space-y-1">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <NavLink
//                 to={item.href}
//                 className={({ isActive }) =>
//                   `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition duration-200 
//                   ${isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-200"}` 
//                 }
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </nav>











//       {/* Logout Button */}
//       <div className="p-4 border-t">
//         <button
//           className="flex items-center space-x-3 w-full px-4 py-2.5 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition duration-200"
//           onClick={onLogout}
//         >
//           <FaSignOutAlt className="w-5 h-5" />
//           <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBook, FaTasks, FaFileAlt, FaHeart, FaCommentDots, FaCogs, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  // Menu items with corresponding icons
  const menuItems = [
    { name: "My Profile", path: "/profile", icon: <FaUser /> },
    { name: "My Courses", path: "/mycourses", icon: <FaBook /> },
    { name: "Tasks", path: "/tasks", icon: <FaTasks /> },
    { name: "Resources", path: "/resources", icon: <FaFileAlt /> },
    { name: "Wishlist", path: "/wishlist", icon: <FaHeart /> },
    { name: "Feedback", path: "/feedback", icon: <FaCommentDots /> },
    { name: "Messages", path: "/messages", icon: <FaCommentDots /> },
    { name: "Settings", path: "/settings", icon: <FaCogs /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      {/* Sidebar Title */}
      <h2 className="text-lg font-semibold mb-4">DASHBOARD</h2>

      {/* Menu List */}
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => navigate(item.path)}
              className="w-full text-left p-2 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center gap-4"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button
        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition duration-200"
        onClick={onLogout}
      >
        <FaSignOutAlt className="inline mr-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

