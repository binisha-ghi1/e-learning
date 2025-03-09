import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { authContext } from "../context/authContext"; // Import Auth Context
import logo from "../../assets/images/logo.png";

const Navbar = ({ cart, wishlist }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  // Handle search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/courses?search=${searchTerm}`);
    }
  };

  return (
    <div className="flex flex-row flex-wrap bg-yellow-400 text-xl sticky top-0 z-50 font-oswald py-4 px-6 items-center justify-between">
      {/* Logo */}
      <div className="flex flex-wrap items-center">
        <img src={logo} alt="S.T.Tech Logo" className="h-10 w-auto" />
        <p className="font-mono text-blue-900">S.T.Tech</p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center gap-6">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline")}>Home</NavLink>
        {user && (
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline")}>Dashboard</NavLink>
        )}
        <NavLink to="/courses" className={({ isActive }) => (isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline")}>Courses</NavLink>
        <NavLink to="/instructors" className={({ isActive }) => (isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline")}>Instructors</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 hover:underline")}>About Us</NavLink>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 px-4 py-2 rounded-full focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-950 font-bold">🔍</button>
        </form>
      </div>

      {/* User Authentication & Profile */}
      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <NavLink to="/login" className="bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-blue-800">Login</NavLink>
            <NavLink to="/signup" className="bg-white text-blue-950 px-4 py-2 rounded-full border border-blue-950 hover:bg-gray-200">Sign Up</NavLink>
          </>
        ) : (
          <div className="flex items-center gap-4">
            {/* Profile Picture or Initials */}
            {user.photoURL ? (
              <img src={user.photoURL} alt="User Profile" className="rounded-full border-2 border-blue-950 h-10 w-10" />
            ) : (
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-950 text-white font-bold">
                {user.displayName ? user.displayName[0].toUpperCase() : "U"}
              </div>
            )}

            {/* Display Name */}
            <p className="text-blue-950 font-bold">{user.displayName || "User"}</p>

            {/* Logout Button */}
            <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700">Logout</button>
          </div>
        )}
      </div>

      {/* Cart and Wishlist Icons */}
      <div className="flex gap-6">
        <NavLink to="/cart" className="relative">
          <IoCartOutline className="text-2xl text-blue-950" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </NavLink>

        <NavLink to="/wishlist" className="relative">
          <FaRegHeart className="text-2xl text-blue-950" aria-label="Wishlist" />
          {wishlist?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;





















