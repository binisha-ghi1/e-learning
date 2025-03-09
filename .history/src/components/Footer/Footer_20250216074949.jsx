import React from "react";
import navbar from "../../assets/images/navbar.png";
import logo from "../../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white py-10 px-6" style={{ backgroundImage: `url(${navbar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <img src={logo} alt="S.T.Tech Logo" className="h-12" />
          <h2 className="text-xl font-bold">S.T.Tech</h2>
          <p className="text-sm">
            S.T. Tech is an e-learning platform offering practical, engaging, and accessible courses designed to help students build skills and achieve their goals.
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">About</h2>
          <p>Blog</p>
          <p>About Us</p>
          <p>Team</p>
          <p>Instructors</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        {/* Links Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Links</h2>
          <p>Home</p>
          <p>Dashboard</p>
          <p>FAQs</p>
          <p>Services</p>
          <p>Why Us</p>
        </div>

        {/* Programs Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Programs</h2>
          <p>IT Courses</p>
          <p>Designing Courses</p>
          <p>Marketing Courses</p>
          <p>Business Courses</p>
          <p>Public Development Courses</p>
          <p>Creative Arts Courses</p>
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
      <div className="text-center mt-8">
        <h2 className="text-lg font-semibold">FOLLOW US ON</h2>
        <div className="flex justify-center space-x-6 mt-4 text-xl">
          <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
        </div>
        <p className="text-sm mt-4">© 2024 S.T.Tech. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;


