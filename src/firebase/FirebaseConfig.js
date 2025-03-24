import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
import { getAnalytics, isSupported } from 'firebase/analytics';

const FirebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

console.log("Firebase API Key:", import.meta.env.VITE_API_KEY);

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let analyticsInstance = null; 
isSupported().then((supported) => {
  if (supported) {
    analyticsInstance = getAnalytics(app);
  }
});

setPersistence(auth, browserSessionPersistence)
  .then(() => console.log("Session persistence set successfully"))
  .catch((error) => console.error("Error setting persistence:", error));


export { auth, db, analyticsInstance as analytics  };








