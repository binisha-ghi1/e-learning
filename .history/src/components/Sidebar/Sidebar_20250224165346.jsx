import React from "react";
import { NavLink } from "react-router-dom";
import {
  LuUser as User,
  LuCheckSquare as CheckSquare,
  LuVideo as Video,
  LuMessageSquare as MessageSquare,
  LuSettings as Settings,
  LuLogOut as LogOut,
  LuBookOpen as BookOpen,
  LuMessageCircle as MessageCircle,
} from "react-icons/lu";

const Sidebar = ({ onLogout }) => {
  const menuItems = [
    { icon: User, label: "My Profile", href: "/profile" },
    { icon: CheckSquare, label: "My Tasks", href: "/tasks" },
    { icon: Video, label: "Course Videos", href: "/videos" },
    { icon: BookOpen, label: "Tasks", href: "/assignments" },
    { icon: MessageCircle, label: "Feedback", href: "/feedback" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-100 border-r shadow-sm">
      {/* Profile Section */}
      <div className="p-4 border-b">
        <h3 className="font-medium text-gray-800">DASHBOARD</h3>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition duration-200 
                  ${isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-200"}`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <button
          className="flex items-center space-x-3 w-full px-4 py-2.5 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition duration-200"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;


