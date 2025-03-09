import React from "react";
import curve from "../../assets/images/curve.png";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  console.log("isAuthenticated", isAuthenticated);
  console.log("isLoading", isLoading);
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 text-white"
      style={{ backgroundImage: `url(${curve})` }}
    >
      <h2 className="text-3xl font-bold mb-6">Login to Your Account</h2>

      {/* Login Form */}
      <form className="w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white outline-none"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white outline-none"
        />
         <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-600 text-white font-medium rounded-lg transition duration-300"
        >
          Login
        </button>

        <button
        onClick={() =>
          loginWithRedirect()
        }
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
         <FcGoogle size="25" />
         Login with Google
        </button>
      </form>

      {/* Don't have an account */}
      <p className="mt-4">
        Don’t have an account?{" "}
        <NavLink to="/signup" className="text-yellow-400 font-semibold">
          Sign up here
        </NavLink>
      </p>
    </div>
  );
};

export default Login;

