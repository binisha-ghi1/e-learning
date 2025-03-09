import React from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../assets/images/cart.png'

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId)); // Remove item by courseId
  };

  const total = cart.reduce((sum, item) => {
    const price = item.price === 'Free' ? 0 : parseFloat(item.price.replace(',', ''));
    return sum + price;
  }, 0); // Calculate total price of courses in the cart

  const checkout = () => {
    // Implement checkout logic here
    alert('Proceeding to checkout...');
  };

  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950 mb-8"> Cart</h2>
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center ">
            <p className="text-xl">Your cart is empty.<br/> Add some courses!</p>
            <img src={cartIcon} alt="" className=" pl-40" />
           
            <NavLink to="/courses" className="text-blue-500 hover:underline">Browse Courses</NavLink>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8">
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4"/>
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-600">{item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-between items-center">
              <p className="text-2xl font-semibold text-blue-950">Total: ${total.toFixed(2)}</p>
              <button 
                onClick={checkout} 
                className="bg-yellow-400 text-blue-950 px-6 py-3 rounded-full hover:bg-yellow-500"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;














