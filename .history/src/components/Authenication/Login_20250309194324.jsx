import React, { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { doSignInWithEmailAndPassword, doSigninWithGoogle } from "@/firebase/auth"; 
import { auth } from "@/firebase/firebaseConfig"; 
import { signOut } from "firebase/auth";
import vector from "../../assets/images/vector.png";
import logsign from "../../assets/images/logsign.png";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserLoggedIn(!!user);
    });
    return () => unsubscribe(); 
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 
    setIsSigningIn(true);
    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSigningIn(false);
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 
    setIsSigningIn(true);
    try {
      await doSigninWithGoogle(); 
    } catch (error) {
      setErrorMessage(error.message); 
    }
    setIsSigningIn(false);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {userLoggedIn && <Navigate to="/profile" replace={true} />} 

      <div className="flex w-4/5 max-w-4xl rounded-lg overflow-hidden shadow-lg shadow-gray-400 bg-white">
        
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center relative">
          <h2 className="text-3xl font-bold mb-2 text-center">Welcome Back!</h2>
          <p className="text-gray-500 text-center mb-4">
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
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <NavLink to="/forgot-password" className="text-blue-900 font-semibold">
                Forgot password?
              </NavLink>
            </div>
            <button
              type="submit"
              disabled={isSigningIn}
              className="w-full py-2 px-4 bg-yellow-500 text-white font-medium rounded-lg cursor-pointer hover:bg-yellow-600 disabled:bg-gray-400"
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

        {/* Right Side - Background Image & Illustration */}
        <div
          className="w-1/2 flex flex-col justify-center items-center text-white p-10 relative"
          style={{
            backgroundImage: `url(${vector})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
           <div className="absolute top-4 right-4 flex items-center">
            <img src={logo} alt="S.T. Tech Logo" className="w-12 h-12 bg-white rounded-lg shadow-md" /> 
            <p className="text-white  font-semibold ml-2">S.T. TECH</p>
          </div>
          <h2 className="text-2xl font-semibold text-center">
            Empower Your Learning Journey- <br /> Welcome to S.T. Tech!
          </h2>
          <img src={logsign} alt="Illustration" className="w-52 ml-16 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Login;














