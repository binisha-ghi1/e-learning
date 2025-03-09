import React, { useEffect, useState, useContext } from "react";
import { auth } from "../../firebase/firebaseConfig"; // Make sure the path is correct
import { onAuthStateChanged } from "firebase/auth";

// Create the Auth Context
const AuthContext = React.createContext();

// Custom hook to use Auth context
export function useAuth() {
  return useContext(AuthContext); // Access AuthContext data
}

// AuthProvider component to manage authentication state
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null); // To store the current authenticated user
  const [userLoggedIn, setUserLoggedIn] = useState(false); // To store the user's logged-in status
  const [loading, setLoading] = useState(true); // To manage loading state while checking auth status

  useEffect(() => {
    // Listen to the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // Set user if logged in
        setUserLoggedIn(true);
      } else {
        setCurrentUser(null); // No user found
        setUserLoggedIn(false);
      }
      setLoading(false); // Stop loading after checking auth state
    });

    // Clean up the subscription when the component unmounts
    return unsubscribe;
  }, []);

  // Provide auth-related values to the children components
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  // Only render children if loading is false
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}




