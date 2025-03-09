import React, { useEffect } from "react";
import curve from "../../assets/images/curve.png";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

const Login = ({ setUser }) => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setUser({
        name: user.name,
        avatar: user.picture,
      });
    }
  }, [isAuthenticated, user, setUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 text-white"
      style={{
        backgroundImage: `url(${curve})`,
        backgroundSize: "50% auto", // Adjust the width to 50% and height to auto
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      {/* Container for the form */}
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">Login to Your Account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
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
            className="w-full py-2 px-4 bg-yellow-600 text-white font-medium rounded-lg transition duration-300 hover:bg-yellow-700"
          >
            Login
          </button>

          <button
            onClick={() => loginWithRedirect()}
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            <FcGoogle size="25" />
            Login with Google
          </button>
        </form>

        {/* Don't have an account */}
        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <NavLink to="/signup" className="text-yellow-400 font-semibold hover:underline">
            Sign up here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;



