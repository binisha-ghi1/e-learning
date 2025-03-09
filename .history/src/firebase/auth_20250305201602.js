// src/components/firebase/auth.js
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { signOut } from "firebase/auth";
import { db } from "@/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";




const saveUserCourses = async (userId, enrolled, active, completed) => {
  try {
    await setDoc(doc(db, "users", userId), {
      enrolledCourses: enrolled,
      activeCourses: active,
      completedCourses: completed
    }, { merge: true }); // Merge to avoid overwriting existing data
  } catch (error) {
    console.error("Error saving courses:", error);
  }
};
// Function to sign in with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth); // Firebase Logout
    localStorage.clear(); // Remove stored session
    sessionStorage.clear(); // Remove session storage
    window.location.reload(); // Force reload to update auth state
  } catch (error) {
    console.error("Logout failed:", error);
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





