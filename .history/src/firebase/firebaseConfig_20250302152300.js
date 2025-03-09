import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

const firebase= {
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
export const auth = getAuth(app); // ✅ Export auth
export const analytics = getAnalytics(app);

