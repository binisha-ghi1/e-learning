// src/firebase/auth.js
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { signOut } from "firebase/auth";
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

// Fetch user courses and role from Firestore after login
const fetchUserCoursesAndRole = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log("Enrolled Courses: ", userData.enrolledCourses);
      console.log("Active Courses: ", userData.activeCourses);
      console.log("Completed Courses: ", userData.completedCourses);
      console.log("Role: ", userData.role);  // Fetch the role (e.g., "student" or "instructor")
      return userData;  // Return user data including courses and role
    } else {
      console.log("No data found for user");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

// Sign-in function using email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Fetch user courses and role data after successful login
    const userData = await fetchUserCoursesAndRole(user.uid);
    
    return { user, userData };  // Return both user and their data
  } catch (error) {
    throw new Error(error.message);
  }
};

// Sign-in function using Google
export const doSigninWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    // Fetch user courses and role data after successful login
    const userData = await fetchUserCoursesAndRole(user.uid);
    
    return { user, userData };  // Return both user and their data
  } catch (error) {
    throw new Error(error.message);
  }
};

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);  // Firebase Logout
    localStorage.clear();  // Remove stored session
    sessionStorage.clear();  // Remove session storage
    window.location.reload();  // Force reload to update auth state
  } catch (error) {
    console.error("Logout failed:", error);
  }
};






