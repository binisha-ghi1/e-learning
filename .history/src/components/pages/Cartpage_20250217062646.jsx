import React from 'react';

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index)); // Remove item by index
  };

  return (
    <div className='cart-page'>
      <h2>Cart</h2>
      {cart.length === 0 ? (
  <p>No courses in cart</p>
) : (
  <ul>
    {cart.map((item, index) => (
      <li key={index}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button onClick={() => removeFromCart(index)}>Remove</button>
      </li>
    ))}
  </ul>
  
)}
export default CartPage;













