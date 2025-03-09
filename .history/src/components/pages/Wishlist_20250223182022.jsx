import React from 'react';

const Wishlist = ({ wishlist, setWishlist }) => {
  return (
    <div>
      <h2>My Wishlist</h2>
      {/* Display wishlist items here */}
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item, index) => (
            <li key={index}>{item.name}</li> // Displaying name of each wishlist item
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;

