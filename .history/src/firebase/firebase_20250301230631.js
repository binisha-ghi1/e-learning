// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADipyn4ARFUE_EdhH12XkxO1HpyoDmqLY",
  authDomain: "e-learning-4acc1.firebaseapp.com",
  projectId: "e-learning-4acc1",
  storageBucket: "e-learning-4acc1.firebasestorage.app",
  messagingSenderId: "68234678226",
  appId: "1:68234678226:web:e0e3d04468aa535aba820b",
  measurementId: "G-NMSVE82XFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);