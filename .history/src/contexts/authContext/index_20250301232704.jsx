import { useEffect, useState } from "react";
import {auth} from '../../firebase/firebase';
const AuthContext = React.createContext();

export function AuthProvider ({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, initializedUser);
     return unsubscribe;
    },[])

    async function initializeUser(user) {
        if (user){
            setCurrentUser({...user});
            setUserLoggedIn(true);
        } else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }
     const value ={
        currentUser,
        userLoggedIn,
        loading
     }
     return(
        <AuthContext.Provider value={value}
     )
}