import { useState } from "react";

const AuthContext = React.createContext();

export function AuthProvider ({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false)
}