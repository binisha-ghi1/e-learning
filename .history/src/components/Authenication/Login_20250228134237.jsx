import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import vector from "../../assets/images/vector.png";
import logsign from "../../assets/images/logsign.png";
import logo from "../../assets/images/logo.png";

const Login = ({ setUser }) => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setUser({
        name: user.name,
        avatar: user.picture,
      });
    }
  }, [isAuthenticated, user, setUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div>
        <img src={vector} alt="" className="src" />
      </div>
    </div>
  );
};

export default Login;


