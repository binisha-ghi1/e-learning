import React from "react";
import curve from "../../assets/images/curve.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="text-white py-10 px-6" style={{ backgroundImage: `url(${curve})`, }}>
     <input type="name" className="type" />
     </div>
  );
};

export default Signup;