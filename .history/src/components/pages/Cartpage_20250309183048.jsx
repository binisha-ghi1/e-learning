import React from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../../assets/images/cart.png';
import esewa from '../../assets/images/esewa.png';

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  
  const total = cart.reduce((sum, item) => {
    const price = item.price === 'Free' ? 0 : parseFloat(item.price.replace(/,/g, ''));
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-8 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg p-8 sm:p-10 text-center shadow-lg">
            <p className="text-lg sm:text-xl text-gray-700 pb-5">Your cart is empty!</p>
            <img src={cartIcon} alt="Empty Cart" className="mx-auto w-32 sm:w-40 pb-5"/>
            <NavLink to="/courses" className="text-blue-950 text-lg font-medium hover:underline">Browse Courses</NavLink>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-xl">
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img src={item.image} alt={item.name} className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg mr-4"/>
                  <div className="flex-1">
                    <p className="text-lg sm:text-xl font-semibold text-gray-800">{item.name}</p>
                    <p className="font-medium text-center text-lg sm:text-xl text-gray-600">{item.price === 'Free' ? 'Free' : `Rs. ${item.price}`}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* Total Section */}
            <div className="mt-8 flex flex-col items-center">
              <div className="bg-gray-50 text-center p-6 rounded-xl shadow-lg w-full max-w-md">
                <p className="text-2xl sm:text-3xl font-semibold text-gray-800">Total: <span className="text-red-600">Rs. {total.toLocaleString()}</span></p>
              </div>

              <p className="text-lg sm:text-xl text-gray-800 mt-8">Book your class at just 2,000 through e-sewa</p>
              <NavLink to="/payment" className="mt-4 py-2 px-6 text-white font-semibold rounded-full hover:bg-blue-100 transition-colors">
                <img src={esewa} alt="Esewa" className="w-32 mx-auto"/>
              </NavLink>

              <p className="bg-gray-100 pl-2 pr-2 text-gray-600 text-lg mt-4">Or pay on cash at the center</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;






















