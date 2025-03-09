// src/contexts/authContext.js
import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Initially set it to false or null

  const login = () => setUserLoggedIn(true);  // Dummy login function
  const logout = () => setUserLoggedIn(false);  // Dummy logout function

  return (
    <AuthContext.Provider value={{ userLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // Custom hook to access AuthContext


