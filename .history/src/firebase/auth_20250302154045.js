import React, { createContext, useState, useContext } from 'react';

// Create context
const AuthContext = createContext();

// Provide default values for the context (use initial value of userLoggedIn)
export const AuthProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const login = () => {
    setUserLoggedIn(true);  // This is just a mock of the login process
  };

  const logout = () => {
    setUserLoggedIn(false);  // This is just a mock of the logout process
  };

  return (
    <AuthContext.Provider value={{ userLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};


