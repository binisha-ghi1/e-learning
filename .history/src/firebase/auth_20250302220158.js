// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { authStateListener, doSignOut } from "../firebase/auth"; // Import from auth.js

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = authStateListener((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const logout = async () => {
    try {
      await doSignOut();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {!loading && children} {/* Prevent rendering before auth state is known */}
    </AuthContext.Provider>
  );
};

