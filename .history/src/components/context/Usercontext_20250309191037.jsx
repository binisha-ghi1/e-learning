// src/components/context/usercontext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    location: '',
    email: '',
    contactNumber: '',
    skill: '',
    biography: '',
  });

  const updateUser = (newData) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);





