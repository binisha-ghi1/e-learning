import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import vector from "../../assets/images/vector.png";
import logsign from "../../assets/images/logsign.png";
import logo from "../../assets/images/logo.png";
import { doSignInWithEmailAndPassword, doSigninWithGoogle } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";

const Login = () => {
    const { userLoggedIn } = useAuth(); // Using userLoggedIn from AuthContext
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous error messages







