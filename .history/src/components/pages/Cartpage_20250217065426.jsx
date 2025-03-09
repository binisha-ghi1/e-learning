import React from 'react';
import { NavLink } from 'react-router-dom';

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const total = cart.reduce((sum, item) => {
    const price = item.price === 'Free' ? 0 : parseFloat(item.price.replace(',', ''));
    return sum + price;
  }, 0);

  const checkout = () => {
    // Implement checkout logic here
    alert('Proceeding to checkout...');
  };

  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950 mb-8">Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg p-8 













