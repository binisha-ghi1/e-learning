import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegHeart, FaChevronDown, FaMoon, FaSun } from "react-icons/fa";
import logo from '../../assets/images/logo.png';

const Navbar = ({ cart, wishlist, user, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/courses?search=${searchTerm}`);
    }
  };

  return (
    <div className="flex flex-row flex-wrap bg-yellow-400 dark:bg-gray-900 text-xl sticky top-0 z-50 font-oswald py-4 px-6 items-center justify-between">
      {/* Logo */}
      <div className="flex flex-wrap items-center">
        <img src={logo} alt="S.T.Tech Logo" className="h-10 w-auto" />
        <p className="font-mono text-blue-900 dark:text-yellow-400">S.T.Tech</p>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-950 dark:text-yellow-400 font-bold" : "hover:text-blue-950 dark:hover:text-yellow-400 hover:underline"}>Home</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-950 dark:text-yellow-400 font-bold" : "hover:text-blue-950 dark:hover:text-yellow-400 hover:underline"}>Dashboard</NavLink>
        <NavLink to="/courses" className={({ isActive }) => isActive ? "text-blue-950 dark:text-yellow-400 font-bold" : "hover:text-blue-950 dark:hover:text-yellow-400 hover:underline"}>Courses</NavLink>
        <NavLink to="/instructors" className={({ isActive }) => isActive ? "text-blue-950 dark:text-yellow-400 font-bold" : "hover:text-blue-950 dark:hover:text-yellow-400 hover:underline"}>Instructors</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-950 dark:text-yellow-400 font-bold" : "hover:text-blue-950 dark:hover:text-yellow-400 hover:underline"}>About Us</NavLink>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="text-2xl text-blue-950 dark:text-yellow-400">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {!user ? (
          <>
            <NavLink to="/login" className="bg-blue-950 dark:bg-yellow-400 text-white dark:text-gray-900 px-4 py-2 rounded-full hover:bg-blue-800">Login</NavLink>
            <NavLink to="/signup" className="bg-white dark:bg-gray-700 text-blue-950 dark:text-yellow-400 px-4 py-2 rounded-full border border-blue-950 dark:border-yellow-400 hover:bg-gray-200">Sign Up</NavLink>
          </>
        ) : (
          <button onClick={handleLogout} className="bg-red-500 dark:bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-700 dark:hover:bg-red-500">Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;





















