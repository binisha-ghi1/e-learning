import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import logo from '../../assets/images/logo.png';

const Navbar = ({ cart, user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-row bg-yellow-400 text-xl sticky top-0 z-50 font-oswald gap-5 py-4 px-6 items-center justify-between">
      {/* Logo with Animation */}
      <div className="flex items-center">
        <img src={logo} alt="S.T.Tech Logo" className="h-10 w-auto mr-2 animate-spin-slow" />
        <p className="font-mono text-blue-950 font-bold">S.T.Tech</p>
      </div>

      <div className="flex items-center gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline"}>Home</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline"}>Dashboard</NavLink>
        <NavLink to="/courses" className={({ isActive }) => isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline"}>Courses</NavLink>
        <NavLink to="/instructors" className={({ isActive }) => isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline"}>Instructors</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline"}>About Us</NavLink>

        {/* Dropdown Menu for More */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 text-blue-950 font-bold hover:underline"
          >
            More <FaChevronDown className="text-sm" />
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <NavLink to="/contact" className="block px-4 py-2 text-blue-950 hover:bg-gray-200" onClick={() => setIsDropdownOpen(false)}>
                Contact
              </NavLink>
              <NavLink to="/team" className="block px-4 py-2 text-blue-950 hover:bg-gray-200" onClick={() => setIsDropdownOpen(false)}>
                Our Team
              </NavLink>
              <NavLink to="/student" className="block px-4 py-2 text-blue-950 hover:bg-gray-200" onClick={() => setIsDropdownOpen(false)}>
                Student Reviews
              </NavLink>
            </div>
          )}
        </div>

        {/* Search Course Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* User Info or Auth Links */}
        {user ? (
          <div className="flex items-center gap-2">
            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
            <span className="text-blue-950 font-bold">{user.name}</span>
          </div>
        ) : (
          <>
            <NavLink to="/signup" className="bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-blue-800">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="text-blue-950 font-bold hover:text-blue-800">
              Login
            </NavLink>
          </>
        )}

        {/* Cart Icon */}
        <NavLink to="/cart" className="relative">
          <IoCartOutline className="text-2xl text-blue-950" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;








