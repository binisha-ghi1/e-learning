import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react"; 

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();  

  if (isLoading) {
    return <div className="flex flex-col items-center justify-center mt-20">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-2xl text-blue-950 font-bold text-center">Welcome to the Dashboard</h1>
        <p className="text-xl text-black pt-6 font-medium">This is your main dashboard area where you can access all your features.</p>
        <p className="text-xl text-black pt-6 font-medium">Please log in first to view this page.</p>
        <p className="text-2xl text-blue-950 pt-8 font-bold">Thank you!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h2 className="text-3xl font-bold mb-4">Welcome, {user.name || "User"}!</h2>
      <p className="text-lg">Email: {user.email}</p>
      <img
        src={user.picture || "/default-profile-image.png"} 
        className="rounded-full w-32 h-32 mt-4"
      />
    </div>
  );
};

export default Dashboard;









