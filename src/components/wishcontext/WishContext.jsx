import React, { createContext, useReducer, useContext, useEffect } from "react";

export const WishContext = createContext();

const wishReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.payload];
    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const WishProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishReducer, [], () => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      localStorage.removeItem("wishlist");
    }
  }, [wishlist]);

  return (
    <WishContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishContext.Provider>
  );
};

export const useWishContext = () => useContext(WishContext);






