import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import vector from "../../assets/images/vector.png";
import logsign from "../../assets/images/logsign.png";
import logo from "../../assets/images/logo.png";
import {doSignInWithEmailAndPassword , doSigninWithGoogle} from '../../../firebase/auth'
import { useAuth } from "../../contexts/authContext";

const Login = ( ) => {
  const {userLoggedIn} = useAuth()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [isSigningIn,setIsSigningIn] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')

  const onSubmit = async  (e) => {
    e.preventDefault()
    if(!isSigningIn){
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email , password)
    }
  }

  const onGoogleSignIn = (e) => {
    e.preventDefault()
    if(!isSigningIn){
      setIsSigningIn(true)
      await doSigninWithGoogle().catch
      setIsSigningIn(false)
  }

 

  return (
    <div className="flex h-screen items-center justify-center bg-white ">
      <div className="flex w-4/5 max-w-4xl  rounded-lg overflow-hidden shadow-lg shadow-gray-400">
        {/* Left Section - Form */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>
          <p className="text-gray-500 mb-6 text-center">Log in to access your account and continue your journey with us.</p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
            />
            <div className="flex justify-between items-center text-sm text-gray-500">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              <NavLink to="/forgot-password" className="text-blue-500">
                Forgot password?
              </NavLink>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-950 text-white font-medium rounded-lg cursor-pointer hover:bg-blue-900"
            >
              Log in
            </button>
            <div className="text-center text-gray-500">or</div>
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-gray-200 text-black cursor-pointer font-semibold py-3 rounded-lg"
            >
              <FcGoogle size="25" /> Continue with Google
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500">
            New user? <NavLink to="/signup" className="text-blue-950 font-semibold">Sign up</NavLink>
          </p>
        </div>
      
        <div
          className=" flex flex-col justify-center items-center p-14 text-white "
          style={{ backgroundImage: `url(${vector})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <img src={logo} alt="" className="bg-white mt-12  rounded-lg mr-4 flex flex-row  relative -top-30 left-35 justify-items-end" /> <p className=" mr-6  ml-4 relative -top-36 px-2 pl-4 italic left-46">S.T. TECH</p>
          <h2 className="text-2xl relative  bottom-25 font-semibold text-center">Empower Your Learning Journey- <br/>Welcome to S.T. Tech!</h2>
          <img src={logsign} alt="" className="w-54 relative bottom-8 left-24 " />
        </div>
      </div>
    </div>
  );
};

export default Login;



