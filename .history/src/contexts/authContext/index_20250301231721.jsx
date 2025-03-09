import { useState } from "react";
import { Auth0Context } from "@auth0/auth0-react";
const AuthContext = React.createContext();

export function AuthProvider ({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
}