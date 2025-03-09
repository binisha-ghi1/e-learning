import React from "react";
import navbar from "../../assets/images/navbar.png";
import logo from "../../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="text-white py-10 px-6"
      style={{ backgroundImage: `url(${navbar})` }}
    >
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mt-20">
        {/* Brand Info */}
        <div className="space-y-2">
          <img src={logo} alt="S.T.Tech Logo" className="h-12" />
          <h2 className="text-xl font-bold">S.T.Tech</h2>
          <p className="text-sm">
            S.T. Tech is an e-learning platform offering practical, engaging, and
            accessible courses designed to help students build skills and
            achieve their goals.
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-2 flex flex-col">
          <h2 className="text-lg font-semibold">About</h2>
          <NavLink to="/blog" className="hover:underline">Blog</NavLink>
          <NavLink to="/about" className="hover:underline">About Us</NavLink>
          <NavLink to="/team" className="hover:underline">Team</NavLink>
          <NavLink to="/instructors" className="hover:underline">Instructors</NavLink>
          <NavLink to="/privacy-policy" className="hover:underline">Privacy Policy</NavLink>
          <NavLink to="/terms" className="hover:underline">Terms & Conditions</NavLink>
        </div>

        {/* Links Section */}
        <div className="space-y-2 flex flex-col gap-1.5">
          <h2 className="text-lg font-semibold">Links</h2>
          <NavLink to="/home" className="hover:underline">Home</NavLink>
          <NavLink to="/dashboard" className="hover:underline">Dashboard</NavLink>
          <NavLink to="/faqs" className="hover:underline">FAQs</NavLink>
          <NavLink to="/services" className="hover:underline">Services</NavLink>
          <NavLink to="/about" className="hover:underline">Why Us</NavLink>
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
          <p>Location: Kwoteshor</p>
          <p>Call: +977 9813000000</p>
          <p>Email: binisha@gmail.com</p>
          <p>Monday - Friday</p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-lg font-semibold">FOLLOW US ON</h2>
        <div className="flex space-x-4 mt-4 text-xl">
          <NavLink to="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </NavLink>
          <NavLink to="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </NavLink>
          <NavLink to="https://www.linkedin.com/" target="_blank">
            <FaLinkedin />
          </NavLink>
        </div>
        <p className="text-sm mt-4">© 2024 S.T.Tech. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;



