import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (courseId) => {
    const updatedCart = cart.filter((item) => item.id !== courseId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + parseInt(item.price), 0);

  return (
    <div className="p-8 mx-auto">
      <h1 className="text-3xl font-bold text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-6">
          {cart.map((course) => (
            <div key={course.id} className="flex justify-between items-center bg-gray-100 p-4 mb-4 rounded-lg">
              <div className="flex items-center">
                <img src={course.image} alt={course.name} className="w-24 h-16 object-cover rounded-lg mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{course.name}</h2>
                  <p className="text-gray-600">Price: Rs. {course.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(course.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-lg font-bold">Total Price: Rs. {totalPrice}</div>

          <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
            Proceed to Checkout
          </button>
        </div>
      )}

      <NavLink to="/" className="block text-center mt-6 text-blue-500">Continue Shopping</Link>
    </div>
  );
};

export default Cart;

