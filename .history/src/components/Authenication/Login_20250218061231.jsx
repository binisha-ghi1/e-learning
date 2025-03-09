import React from "react";
import curve from "../../assets/images/curve.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 text-white"
      style={{ backgroundImage: `url(${curve})` }}
    >
      <h2 className="text-3xl font-bold mb-6">Create Your Account</h2>

      {/* Signup Form */}
      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white outline-none"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white outline-none"
        />

        <input
          type="password"
          placeholder="Create a password"
          className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white outline-none"
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Sign Up
        </button>
      </form>

      {/* Already Have an Account */}
      <p className="mt-4">
        Already have an account?{" "}
        <NavLink to="/login" className="text-yellow-400 font-semibold">
          Login here
        </NavLink>
      </p>
    </div>
  );
};

export default Login;