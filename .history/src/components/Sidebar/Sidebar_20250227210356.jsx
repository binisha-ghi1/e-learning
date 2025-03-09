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






import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate(); 

 
  const handleNavigation = (path) => {
    navigate(path); 
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <li>DASHBOARD</li>
        <div className="buttons">
                   <button onClick={() => handleNavigation('/profile')} className="block p-2 mb-2 w-full text-left">My Profile</button>

          <button onClick={() => handleNavigation('/mycourses')}>
            <li>My Courses</li>
          </button>

          <button onClick={() => handleNavigation('/tasks')}>
            <li>Tasks</li>
          </button>

          <button onClick={() => handleNavigation('/resources')}>
            <li>Resources</li>
          </button>

          <button onClick={() => handleNavigation('/wishlist')}>
            <li>Wishlist</li>
          </button>

          <button onClick={() => handleNavigation('/feedback')}>
            <li>Feedback</li>
          </button>

          <button onClick={() => handleNavigation('/messages')}>
            <li>Messages</li>
          </button>

          <button onClick={() => handleNavigation('/settings')}>
            <li>Settings</li>
          </button>

        
          <button
            className="flex items-center space-x-3 w-full px-4 py-2.5 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition duration-200"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
