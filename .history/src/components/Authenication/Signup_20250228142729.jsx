import React from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import curve from "../../assets/images/curve.png";
import logo from "../../assets/images/logo.png";
import logsign from "../../assets/images/logsign.png";

const SignUp = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex w-4/5 max-w-4xl shadow-lg rounded-lg overflow-hidden shadow-gr">
        <div
          className="w-1/2 flex flex-col justify-center items-center text-white p-10"
          style={{ backgroundImage: `url(${curve})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <img src={logo} alt="S.T. Tech Logo" className="mb-4 relative bottom-30  bg-white rounded-lg right-50" /> <p className="relative bottom-40  italic right-36">S.T. TECH</p>
          <h2 className=" relative bottom-6 text-2xl font-medium mr-10 text-center">Empower Your Learning Journey- <br/>Welcome to S.T. Tech! </h2>
          <img src={logsign} alt="" className="w-62" />
        </div>
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign up to S.T. Tech</h2>
          <button
            className="w-full flex items-center justify-center gap-2 bg-gray-200 text-black font-semibold py-3 rounded-lg border border-gray-300 shadow-md mb-4"
          >
            <FcGoogle size="25" /> Sign up with Google
          </button>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-950 text-white font-medium rounded-lg hover:bg-blue-900"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500">
            Already signed in? <NavLink to="/login" className="text-blue-950 font-semibold">Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

