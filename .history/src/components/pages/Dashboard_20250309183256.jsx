import React, { useState, useEffect } from "react";
import { auth } from "@/firebase/firebaseConfig"; // Correct import path for Firebase config

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser; // Get the current logged-in user from Firebase
    if (currentUser) {
      setUser(currentUser); // Set user data
    }
  }, []);

  if (!user) {
    return <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-2xl text-blue-950 font-bold text-center">Welcome to the Dashboard</h1>
      <p className="text-xl text-black pt-6 font-medium ">This is your main dashboard area where you can access all your features.</p>
      <p className="text-xl text-black  pt-6 font-medium ">Please Log in first to view this page.</p>
      <p className="text-2xl text-blue-950  pt-8 font-bold ">Thankyou !</p>
    </div>; // Show loading if user data is not available
  }

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h2 className="text-3xl font-bold mb-4">Welcome, {user.displayName || "User"}!</h2>
      <p className="text-lg">Email: {user.email}</p>
      <img
        src={user.photoURL || "/default-profile-image.png"} // Fallback image if no profile picture is available
        alt="Profile"
        className="rounded-full w-32 h-32 mt-4"
      />
    </div>
  );
};

export default Dashboard;








