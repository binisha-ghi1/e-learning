import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { signOut } from "firebase/auth";
import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

// Fetch user role and courses from Firestore after login
const fetchUserRoleAndCourses = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const role = userData.role;  
      const enrolledCourses = userData.enrolledCourses || [];
      const activeCourses = userData.activeCourses || [];
      const completedCourses = userData.completedCourses || [];
      
      console.log("Role: ", role);
      console.log("Enrolled Courses: ", enrolledCourses);
      console.log("Active Courses: ", activeCourses);
      console.log("Completed Courses: ", completedCourses);

      return { role, enrolledCourses, activeCourses, completedCourses }; 
    } else {
      console.log("No data found for user");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};


export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    
    const { role, enrolledCourses, activeCourses, completedCourses } = await fetchUserRoleAndCourses(user.uid);
    
    return { user, role, enrolledCourses, activeCourses, completedCourses };
  } catch (error) {
    throw new Error(error.message);
  }
};


export const doSigninWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    const { role, enrolledCourses, activeCourses, completedCourses } = await fetchUserRoleAndCourses(user.uid);
    
    return { user, role, enrolledCourses, activeCourses, completedCourses };
  } catch (error) {
    throw new Error(error.message);
  }
};


export const logout = async () => {
  try {
    await signOut(auth); 
    localStorage.clear(); 
    sessionStorage.clear(); 
    window.location.reload(); 
  } catch (error) {
    console.error("Logout failed:", error);
  }
};






