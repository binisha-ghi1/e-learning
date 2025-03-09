import React from "react";
import curve from "../../assets/images/curve.png";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${curve})` }}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create Your Account
        </h2>

        {/* Signup Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-white text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Already Have an Account */}
        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-yellow-400 font-semibold">
            Login here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
