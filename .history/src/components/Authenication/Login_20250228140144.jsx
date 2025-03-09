import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import vector from "../../assets/images/vector.png";
import logsign from "../../assets/images/logsign.png";
import logo from "../../assets/images/logo.png";

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
    <div className="flex h-screen items-center justify-center bg-white ">
      <div className="flex w-4/5 max-w-4xl shadow-lg rounded-lg overflow-hidden border-4 border-blue-950">
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
              className="w-full py-2 px-4 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700"
            >
              Log in
            </button>
            <div className="text-center text-gray-500">or</div>
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 rounded-lg"
            >
              <FcGoogle size="25" /> Continue with Google
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500">
            New user? <NavLink to="/signup" className="text-yellow-500 font-semibold">Sign up</NavLink>
          </p>
        </div>
      
        <div
          className=" flex flex-col justify-center items-center p-10 text-white "
          style={{ backgroundImage: `url(${vector})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <img src={logo} alt="" className="bg-white mt-12  rounded-lg mr-4 flex flex-row  relative -top-35 left-35 justify-items-end" /> <p className=" mr-6  ml-4 relative -top-42 px-2 pl-4 italic left-46">S.T. TECH</p>
          <h2 className="text-2xl relative  bottom-15 font-bold text-center">Empower Your Learning Journey- <br/>Welcome to S.T. Tech!</h2>
          <img src={logsign} alt="" className="w-54 " />
        </div>
      </div>
    </div>
  );
};

export default Login;



