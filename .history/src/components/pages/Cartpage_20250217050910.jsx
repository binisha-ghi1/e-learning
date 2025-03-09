import React from 'react';

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6"> Cart</h2>
      {cart.length === 0 ? (
        <p>0 Course in Cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b py-2">
              <div className="flex items-center">
                <img src={course.image} alt={course.name} className="w-16 h-16 object-cover rounded-lg mr-4"/>
                <p>{course.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <span>{course.price}</span>
                <button 
                  onClick={() => removeFromCart(index)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;





