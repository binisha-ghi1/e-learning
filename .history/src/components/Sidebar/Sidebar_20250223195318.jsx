import React from 'react';
import {
  User,
  CheckSquare,
  Video,
  MessageSquare,
  Settings,
  LogOut,
  BookOpen,
  MessageCircle
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: User, label: 'My Profile', href: '/profile' },
    { icon: CheckSquare, label: 'My Tasks', href: '/tasks' },
    { icon: Video, label: 'Course Videos', href: '/videos' },
    { icon: BookOpen, label: 'Tasks', href: '/assignments' },
    { icon: MessageCircle, label: 'Feedback', href: '/feedback' },
    { icon: MessageSquare, label: 'Messages', href: '/messages' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="flex flex-col h-screen w-64 bg-white border-r shadow-sm">
      {/* Profile Section */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-medium">DASHBOARD</h3>
           
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <button 
          className="flex items-center space-x-3 w-full px-4 py-2.5 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
          onClick={() => console.log('Logout clicked')}
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
