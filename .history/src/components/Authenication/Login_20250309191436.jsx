import React, { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { doSignInWithEmailAndPassword, doSigninWithGoogle } from "@/firebase/auth"; 
import { auth } from "@/firebase/firebaseConfig"; 
import { signOut } from "firebase/auth";
import curve from "../../assets/images/curve.png";
import logsign from "../../assets/images/logsign.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true); 
      } else {
        setUserLoggedIn(false); 
      }
    });

    return () => unsubscribe(); 
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsSigningIn(false); 
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSigninWithGoogle(); 
      } catch (error) {
        setErrorMessage(error.message); 
      } finally {
        setIsSigningIn(false); 
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserLoggedIn(false); 
    } catch (error) {
      setErrorMessage(error.message); 
    }
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      {userLoggedIn && <Navigate to="/profile" replace={true} />} 
      <div className="flex w-4/5 max-w-4xl rounded-lg overflow-hidden shadow-lg shadow-gray-400">
        {!userLoggedIn ? (
          <div className="w-1/2  p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>
           
             <img src={logo} alt="S.T. Tech Logo" className="mb-4 relative bottom-30  bg-white rounded-lg right-50" /> 
                      <p className="relative bottom-40 italic right-36">S.T. TECH</p>
                      <h2 className=" relative bottom-6 text-2xl font-medium mr-10 text-center">Empower Your Learning Journey- <br/>Welcome to S.T. Tech! </h2>
                      <img src={logsign} alt="" className="w-62" />
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
             <div
                      className="w-1/2 flex flex-col justify-center items-center text-white p-10"
                      style={{ backgroundImage: `url(${curve})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      </div>
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
       
        <div className="flex flex-col justify-center items-center p-14">
          <h2 className="text-2xl font-semibold text-center">
            Empower Your Learning Journey- <br /> Welcome to S.T. Tech!
          </h2>
        </div>
      </div>
  
    </div>
  );
};

export default Login;












