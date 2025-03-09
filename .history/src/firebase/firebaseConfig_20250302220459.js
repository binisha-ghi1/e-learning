// src/components/firebase/FirebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyADipyn4ARFUE_EdhH12XkxO1HpyoDmqLY",
  authDomain: "e-learning-4acc1.firebaseapp.com",
  projectId: "e-learning-4acc1",
  storageBucket: "e-learning-4acc1.appspot.com",
  messagingSenderId: "68234678226",
  appId: "1:68234678226:web:e0e3d04468aa535aba820b",
  measurementId: "G-NMSVE82XFJ"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);

// Ensure session persistence is applied **after** initializing auth
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence set successfully");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

// Export auth and analytics
export { auth };
export const analytics = getAnalytics(app);





