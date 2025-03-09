import React, { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { doSignInWithEmailAndPassword, doSigninWithGoogle } from "@/firebase/auth"; // Correct path for your functions
import { auth } from "@/firebase/firebaseConfig"; // Correct import path for Firebase config
import { signOut } from "firebase/auth";
import Sidebar from "../Sidebar/Sidebar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    // Firebase auth state listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true); // User logged in
      } else {
        setUserLoggedIn(false); // User logged out
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password); // Call Firebase email sign-in function
      } catch (error) {
        setErrorMessage(error.message); // Display error message
      } finally {
        setIsSigningIn(false); // Reset loading state
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSigninWithGoogle(); // Call Firebase Google sign-in function
      } catch (error) {
        setErrorMessage(error.message); // Display error message
      } finally {
        setIsSigningIn(false); // Reset loading state
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Log the user out of Firebase
      setUserLoggedIn(false); // Update the local state
    } catch (error) {
      setErrorMessage(error.message); // Display logout error if any
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      {userLoggedIn && <Navigate to="/profile" replace={true} />} {/* Redirect if logged in */}
      <div className="flex w-4/5 max-w-4xl rounded-lg overflow-hidden shadow-lg shadow-gray-400">
        {/* Left Section - Form */}
        {!userLoggedIn ? (
          <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>
            <p className="text-gray-500 mb-6 text-center">
              Log in to access your account and continue your journey with us.
            </p>
            {errorMessage && <p className="text-red-500 text-center mb-2">{errorMessage}</p>}
            <form onSubmit={onSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 outline-none"
                required
              />
              <button
                type="submit"
                disabled={isSigningIn}
                className="w-full py-2 px-4 bg-blue-950 text-white font-medium rounded-lg cursor-pointer hover:bg-blue-900 disabled:bg-gray-400"
              >
                {isSigningIn ? "Logging in..." : "Log in"}
              </button>
              <div className="text-center text-gray-500">or</div>
              <button
                onClick={onGoogleSignIn}
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-gray-200 text-black cursor-pointer font-semibold py-3 rounded-lg"
                disabled={isSigningIn}
              >
                <FcGoogle size="25" /> Continue with Google
              </button>
            </form>
            <p className="mt-4 text-center text-gray-500">
              New user?{" "}
              <NavLink to="/signup" className="text-blue-950 font-semibold">
                Sign up
              </NavLink>
            </p>
          </div>
        ) : (
          <div className="w-1/2  p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center">Logged In!</h2>
            <p className="text-gray-500 mb-6 text-center">
              You are now logged in. Welcome back to your learning journey.
            </p>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-red-600  font-medium rounded-lg cursor-pointer hover:bg-red-500"
            >
              Logout
            </button>
          </div>
        )}

        {/* Right Section - Branding */}
        <div className="flex flex-col justify-center items-center p-14 text-white">
          <h2 className="text-2xl font-semibold text-center">
            Empower Your Learning Journey- <br /> Welcome to S.T. Tech!
          </h2>
        </div>
      </div>
      <Sidebar onLogout={handleLogout} />
    </div>
  );
};

export default Login;












