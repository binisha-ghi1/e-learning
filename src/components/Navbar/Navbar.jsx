import React, { useState, useRef, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../cartcontext/CartContext';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegHeart, FaChevronDown } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import logo from '../../assets/images/logo.png';
import { WishContext } from '../wishcontext/WishContext';

const Navbar = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishContext);

  useEffect(() => {
    const closeDropdownIfClickedOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", closeDropdownIfClickedOutside);
    return () => document.removeEventListener("mousedown", closeDropdownIfClickedOutside);
  }, []);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/courses?search=${searchTerm}`);
    }
  };

  const getNavLinkClass = (isActive) => 
    isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline";

  return (
    <div className="flex flex-row flex-wrap bg-yellow-400 text-xl sticky top-0 z-50 font-oswald py-4 px-6 items-center justify-between">
      <div className="flex flex-wrap items-center">
        <img src={logo} alt="S.T.Tech Logo" className="h-10 w-auto" />
        <p className="font-mono text-blue-900">S.T.Tech</p>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => getNavLinkClass(isActive)}>Dashboard</NavLink>
        <NavLink to="/courses" className={({ isActive }) => getNavLinkClass(isActive)}>Courses</NavLink>
        <NavLink to="/instructors" className={({ isActive }) => getNavLinkClass(isActive)}>Instructors</NavLink>
        <NavLink to="/about" className={({ isActive }) => getNavLinkClass(isActive)}>About Us</NavLink>

        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-1 text-blue-950 font-bold hover:underline">
            More <FaChevronDown className="text-sm" />
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <NavLink to="/contact" className="block px-4 py-2 text-blue-950 hover:bg-gray-200" onClick={() => setIsDropdownOpen(false)}>Contact</NavLink>
              <NavLink to="/team" className="block px-4 py-2 text-blue-950 hover:bg-gray-200" onClick={() => setIsDropdownOpen(false)}>Our Team</NavLink>
              <NavLink to="/student" className="block px-4 py-2 text-blue-950 hover:bg-gray-200" onClick={() => setIsDropdownOpen(false)}>Student Reviews</NavLink>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <form onSubmit={onSearchSubmit} className="relative">
          <input type="text" placeholder="Search courses..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border border-gray-400 px-4 py-2 rounded-full focus:outline-none focus:border-blue-500" />
          <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-950 font-bold"><FcSearch /></button>
        </form>

        {user ? (
          <div className="flex items-center gap-2">
            {user?.picture ? (
              <img src={user?.picture} alt="User" className="w-10 h-10 rounded-full object-cover" />
             
            ) : (
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300">
              <span className="text-gray-700 font-bold">{user?.name?.charAt(0)}</span>
            </div>
          )}
          <span className="ml-2 text-blue-950">{user?.name || "User"}</span> 
        </div>
        ) : (
          <>
            <NavLink to="/login" className="bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-blue-800">Login</NavLink>
            <NavLink to="/signup" className="bg-white text-blue-950 px-4 py-2 rounded-full border border-blue-950 hover:bg-gray-200">Sign Up</NavLink>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <NavLink to="/wishlist" className="flex flex-col items-center text-blue-950 relative">
          {wishlist?.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs font-semibold text-red-600 bg-white rounded-full w-5 h-5 flex items-center justify-center">{wishlist.length}</span>
          )}
          <FaRegHeart className="text-2xl" />
        </NavLink>

        <NavLink to="/cart" className="flex flex-col items-center text-blue-950 relative">
          {cart?.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs font-semibold text-red-600 bg-white rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</span>
          )}
          <IoCartOutline className="text-2xl" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;


























