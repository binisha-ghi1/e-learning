import React, { useState } from "react";
import vector from "../../assets/images/vector.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // Added error state to manage messages

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Reset error message each time user submits the form
    setError('');

    // Simulate login logic (replace with actual authentication logic)
    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      // Optionally, redirect or set user state on success
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 text-white"
      style={{ backgroundImage: `url(${vector})` }}
    >
      <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>

      {/* Login Form */}
      <form className="w-full max-w-md space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white outline-none"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white outline-none"
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Login
        </button>
      </form>

      {/* Error message */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Forgot Password & SignUp Link */}
      <p className="mt-4">
        Don't have an account?{" "}
        <NavLink to="/signup" className="text-yellow-400 font-semibold">
          Sign up here
        </NavLink>
      </p>
    </div>
  );
};

export default Login;


