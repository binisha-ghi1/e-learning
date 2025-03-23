import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
import { getAnalytics } from 'firebase/analytics';


const FirebaseConfig = {
  apiKey: env.REACT_APP_API_KEY,
  authDomain:env.REACT_APP_AUTH_DOMAIN,
  projectId: env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 


setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence set successfully");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });


export { auth, db }; 
export const analytics = getAnalytics(app);






