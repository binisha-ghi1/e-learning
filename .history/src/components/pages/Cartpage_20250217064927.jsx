import React from 'react';

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const total = cart.reduce((sum, item) => {
    const price = item.price === 'Free' ? 0 : parseFloat(item.price.replace(',', ''));
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950 mb-8">Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-xl text-gray-600">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-6 flex items-center justify-between shadow-lg">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg"/>
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Instructor: {item.instructor}</p>
                    <p className="text-blue-950 font-bold">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="bg-white rounded-lg p-6 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-bold text-blue-950">${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;













