import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth, db } from "@/firebase/firebaseConfig"; // Import auth and db
import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase auth function
import { doc, setDoc } from "firebase/firestore"; // Firestore functions for writing data
import curve from "../../assets/images/curve.png";
import logo from "../../assets/images/logo.png";
import logsign from "../../assets/images/logsign.png";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Track error messages
  const [isSigningUp, setIsSigningUp] = useState(false); // Track if signup is in progress
  const [user, setUser] = useState(null); // Track the signed-in user

  // Listen for auth state changes (user sign-in state)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Store user data when signed in
      } else {
        setUser(null); // Clear user data when signed out
      }
    });

    return () => unsubscribe(); 
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!isSigningUp) {
      setIsSigningUp(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userRef = doc(db, "users", userCredential.user.uid); 
        await setDoc(userRef, {
          fullName: fullName,
          username: username,
          email: email,
        });

        console.log("User data saved to Firestore!");

      } catch (error) {
        setErrorMessage(error.message); 
      } finally {
        setIsSigningUp(false);
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex w-4/5 max-w-4xl shadow-lg rounded-lg overflow-hidden shadow-gray-400">
        <div
          className="w-1/2 flex flex-col justify-center items-center text-white p-10"
          style={{ backgroundImage: `url(${curve})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <img src={logo} alt="S.T. Tech Logo" className="mb-4 relative bottom-30  bg-white rounded-lg right-50" /> 
          <p className="relative bottom-40 italic right-36">S.T. TECH</p>
          <h2 className=" relative bottom-6 text-2xl font-medium mr-10 text-center">Empower Your Learning Journey- <br/>Welcome to S.T. Tech! </h2>
          <img src={logsign} alt="" className="w-62" />
        </div>
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign up to S.T. Tech</h2>
          <button
            className="w-full flex items-center justify-center gap-2 bg-gray-200 text-black font-semibold py-3 rounded-lg border border-gray-300 shadow-md mb-4"
          >
            <FcGoogle size="25" /> Sign up with Google
          </button>
          {errorMessage && <p className="text-red-500 text-center mb-2">{errorMessage}</p>}
          <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-950 text-white font-medium rounded-lg hover:bg-blue-900"
              disabled={isSigningUp}
            >
              {isSigningUp ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          {user && (
            <div className="mt-4 text-center text-gray-500">
              <p>Signed in as:</p>
              <p>Email: {user.email}</p>
              <p>UID: {user.uid}</p>
            </div>
          )}
          <p className="mt-4 text-center text-gray-500">
            Already signed in? <NavLink to="/login" className="text-blue-950 font-semibold">Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;





