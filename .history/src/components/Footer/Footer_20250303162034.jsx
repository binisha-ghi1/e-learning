import React from "react";
import navbar from "../../assets/images/navbar.png";
import logo from "../../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white py-10 px-6 " style={{ backgroundImage: `url(${navbar})`, }}>
      {/* Footer Content */}
      <div className="max-w-6xl mt-20 mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Info */}
        <div className="space-y-2">
          <img src={logo} alt="S.T.Tech Logo" className="h-12" />
          <h2 className="text-xl font-bold">S.T.Tech</h2>
          <p className="text-sm">
            S.T. Tech is an e-learning platform offering practical, engaging, and accessible courses designed to help students build skills and achieve their goals.
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="hover:underline pt-1">Blog</p>
          <NavLink to="/about">
          <p className="hover:underline">About Us</p>
          </NavLink>
          <p className="hover:underline pt-1">Team</p>
          <p className="hover:underline pt-1">Instructors</p>
          <p className="hover:underline pt-1">Privacy Policy</p>
          <p className="hover:underline pt-1">Terms & Conditions</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Links</h2>
          <NavLink to="/home">
          <p className="hover:underline">Home</p>
          </NavLink>
          <NavLink to="/dashboard">
          <p className="hover:underline pt-3">Dashboard</p>
          </NavLink>
          <NavLink to="/contact">
          <p className="hover:underline pb-2 pt-4">FAQs</p>
          </NavLink>

          <NavLink to="/contact">
          <p className="hover:underline pb-2">Services</p>
          </NavLink>
          <NavLink to="/about">
          <p className="hover:underline pt-2">Why Us</p>
          </NavLink>
        </div>

        {/* Programs Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Programs</h2>
          <p className="hover:underline">IT Courses</p>
          <p className="hover:underline">Designing Courses</p>
          <p className="hover:underline">Marketing Courses</p>
          <p className="hover:underline">Business Courses</p>
          <p className="hover:underline">Public Development Courses</p>
          <p className="hover:underline">Creative Arts Courses</p>
        </div>

        {/* Address Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Address</h2>
          <p>Location</p>
          <p>Call: +977 9813000000</p>
          <p>Email: binisha@gmail.com</p>
          <p>Monday - Friday</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-start mt-20">
        <h2 className="text-lg font-semibold">FOLLOW US ON</h2>
        <div className="flex justify-start space-x-6 mt-4 text-xl">
          <FaFacebook className=" cursor-pointer" />
          <FaInstagram className=" cursor-pointer" />
          <FaLinkedin className=" cursor-pointer" />
        </div>
        <p className="text-sm mt-4">© 2024 S.T.Tech. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;


