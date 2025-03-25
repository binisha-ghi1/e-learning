import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Create context
export const WishContext = createContext();

const wishReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case 'REMOVE_FROM_WISHLIST':
      return { 
        ...state, 
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id) 
      };
    default:
      return state;
  }
};

export const WishProvider = ({ children }) => {
  
  const initialState = { wishlist: JSON.parse(localStorage.getItem('wishlist')) || [] };

  const [state, dispatch] = useReducer(wishReducer, initialState);

  
  useEffect(() => {
    if (state.wishlist.length > 0) {
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    } else {
      localStorage.removeItem('wishlist'); // Clear if empty
    }
  }, [state.wishlist]);

  return (
    <WishContext.Provider value={{ wishlist: state.wishlist, dispatch }}>
      {children}
    </WishContext.Provider>
  );
};

export const useWishContext = () => useContext(WishContext);




