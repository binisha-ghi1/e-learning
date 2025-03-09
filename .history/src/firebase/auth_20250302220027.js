// src/components/firebase/auth.js
import { auth } from './firebaseConfig'; // Correct import path
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { onAuthStateChanged, signOut } from "firebase/auth";

// Function to sign in with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to sign in with Google
export const doSigninWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    setUser(null); // Ensure user is set to null after logout
    localStorage.removeItem("user"); // Clear local storage session
    sessionStorage.removeItem("user"); // Clear session storage
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

return (
  <AuthContext.Provider value={{ user, logout, loading }}>
    {!loading && children} {/* Prevent rendering before auth state is known */}
  </AuthContext.Provider>
);




