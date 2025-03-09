import React, { useEffect } from "react";
import curve from "../../assets/images/curve.png";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

const Login = ({ setUser }) => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    // If user is authenticated, update the state with user data
    if (isAuthenticated && user) {
      setUser({
        name: user.name,  // Use Auth0's user data
        avatar: user.picture,  // Use the user's profile picture from Auth0
      });
    }
  }, [isAuthenticated, user, setUser]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 text-white"
      style={{ backgroundImage: `url(${curve})` }}
    >
      <h2 className="text-3xl font-bold mb-6">Login to Your Account</h2>

      {/* Login with Google Button */}
      <button
        onClick={() => loginWithRedirect({ redirectUri: window.location.origin + "/dashboard" })}
        type="button"
        className="w-full max-w-md bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
      >
        <FcGoogle size="25" />
        Login with Google
      </button>

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



