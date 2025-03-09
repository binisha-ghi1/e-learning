// src/components/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADipyn4ARFUE_EdhH12XkxO1HpyoDmqLY",
  authDomain: "e-learning-4acc1.firebaseapp.com",
  projectId: "e-learning-4acc1",
  storageBucket: "e-learning-4acc1.appspot.com",
  messagingSenderId: "68234678226",
  appId: "1:68234678226:web:e0e3d04468aa535aba820b",
  measurementId: "G-NMSVE82XFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and analytics
export const auth = getAuth(app);
export const analytics = getAnalytics(app);



