import React from 'react';
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import logo from '../../assets/images/logo.png';

const Navbar = ({ cart, user }) => {
  return (
    <div className="flex flex-row bg-yellow-400 text-xl sticky top-0 z-50 font-oswald gap-5 py-4 px-6 items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="S.T.Tech Logo" className="h-10 w-auto mr-2" />
        <p className="font-mono text-blue-950 font-bold">S.T.Tech</p>
      </div>
      
      <div className="flex items-center gap-6">
        <NavLink to="/" className={({ isActive }) => 
          isActive ? "text-blue-950 font-bold" : "hover:text-blue-950 h"
        }>Home</NavLink>
        
        {user && <NavLink to="/dashboard" className={({ isActive }) => 
          isActive ? "text-blue-950 font-bold" : "hover:text-blue-950"
        }>Dashboard</NavLink>}
        
        <NavLink to="/courses" className={({ isActive }) => 
          isActive ? "text-blue-950 font-bold" : "hover:text-blue-950"
        }>Courses</NavLink>
        
        <NavLink to="/instructors" className={({ isActive }) => 
          isActive ? "text-blue-950 font-bold" : "hover:text-blue-950"
        }>Instructors</NavLink>
        
        <NavLink to="/about" className={({ isActive }) => 
          isActive ? "text-blue-950 font-bold" : "hover:text-blue-950"
        }>About Us</NavLink>
        
        <NavLink to="/contact" className={({ isActive }) => 
          isActive ? "text-blue-950 font-bold" : "hover:text-blue-950"
        }>Contact</NavLink>
        
        <NavLink to="/more" className={({ isActive }) => 
          isActive ? "text-blue-950 font-bold" : "hover:text-blue-950"
        }>More</NavLink>
      </div>

      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <NavLink to="/signup" className="bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-blue-800">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="text-blue-950 font-bold hover:text-blue-800">
              Login
            </NavLink>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
            <span className="text-blue-950 font-bold">{user.name}</span>
          </div>
        )}
        
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


