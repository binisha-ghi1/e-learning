import React from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../assets/images/cart.png';

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  // Calculate total price, handling numbers with commas
  const total = cart.reduce((sum, item) => {
    const price = item.price === 'Free' ? 0 : parseFloat(item.price.replace(/,/g, ''));
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950 mb-8">Cart</h2>
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-xl text-blue-950 pb-5">Your cart is empty!</p>
            <img src={cartIcon} alt="Empty Cart" className="mx-auto w-40 pb-5"/>
            <NavLink to="/courses" className="text-blue-950 text-xl font-medium hover:underline">Browse Courses</NavLink>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg mr-4"/>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600">{item.price === 'Free' ? 'Free' : item.price}</p>
                  <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-2xl font-semibold text-blue-950">Total: {total.toLocaleString()}</p>
              <NavLink to="/checkout" className="bg-teal-800 text-white py-2 px-6 rounded-full">
                Checkout
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;



















