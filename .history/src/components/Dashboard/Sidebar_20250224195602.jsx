// import React from 'react';

// const Sidebar = ({ onSectionChange, activeSection }) => {
//   const sections = [
//     { name: "My Profile", icon: "👤" },
//     { name: "My Courses", icon: "📚" },
//     { name: "Wishlist", icon: "❤️" },
//     { name: "Tasks", icon: "📋" },
//     { name: "Courses Videos", icon: "🎥" },
//     { name: "Feedback", icon: "💬" },
//     { name: "Messages", icon: "📩" },
//     { name: "Settings", icon: "⚙️" },
//     { name: "Logout", icon: "🚪", className: "text-red-500" }
//   ];

//   return (
//     <div className="w-64 bg-blue-800 text-white min-h-screen p-4">
//       <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
//       <ul>
//         {sections.map((section, index) => (
//           <li key={index}>
//             <button
//               onClick={() => onSectionChange(section.name)}
//               className={`flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700 rounded ${
//                 activeSection === section.name ? "bg-gray-500" : ""
//               } ${section.className || ""}`}
//             >
//               <span>{section.icon}</span>
//               <span>{section.name}</span>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;