import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../cartcontext/CartContext";
import cartIcon from "../../assets/images/cart.png";
import esewa from "../../assets/images/esewa.png";

const CartPage = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const removeFromCart = (courseId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: courseId });
  };

  const total = cart.reduce((sum, item) => {
    const price = item.price === "Free" ? 0 : parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return sum + price * (item.qty || 1);
  }, 0);

  const handleProceedToPayment = () => {
    const payableItems = cart
      .filter(item => item.price !== "Free")
      .map(item => ({
        ...item,
        qty: item.qty || 1 
      }));

    if (payableItems.length === 0) {
      alert("No payable items in your cart");
      return;
    }

    navigate("/payment", {
      state: {
        items: payableItems,
        total: total.toFixed(2)
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-8 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg p-8 sm:p-10 text-center shadow-lg">
            <p className="text-lg sm:text-xl text-gray-700 pb-5">Your cart is empty!</p>
            <img src={cartIcon} alt="Empty Cart" className="mx-auto w-32 sm:w-40 pb-5" />
            <NavLink to="/courses" className="text-blue-950 text-lg font-medium hover:underline">
              Browse Courses
            </NavLink>
          </div>
        ) : (
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-xl">
            <ul className="space-y-6">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src={item.image} alt={item.name} className="w-16 sm:w-20 h-16 sm:h-20 rounded-lg mr-4" />
                  <div className="flex-1">
                    <p className="text-lg sm:text-xl font-semibold text-gray-800">{item.name}</p>
                    <div className="flex justify-between mt-2">
                      <p className="font-medium text-lg text-gray-600">
                        {item.price === "Free" ? "Free" : `Rs. ${item.price}`}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center">
              <div className="bg-gray-50 text-center p-6 rounded-xl shadow-lg w-full max-w-md">
                <p className="text-xl font-semibold text-black">
                  Total: <span className="text-red-600">Rs. {total.toLocaleString()}</span>
                </p>
              </div>

              {total > 0 && (
                <>
                  <p className="text-lg sm:text-xl text-gray-800 mt-8">Book your class at just 2,000 through e-sewa</p>
                  <button
                    onClick={handleProceedToPayment}
                    className="mt-4 p-2 bg-transparent hover:bg-blue-50 cursor-pointer rounded-lg transition-colors"
                  >
                    <img src={esewa} alt="Esewa" className="w-32 sm:w-40" />
                  </button>
                </>
              )}

              <p className="bg-gray-100 px-4 py-2 text-gray-600 text-lg mt-4 rounded-full">
                Or pay in cash at the center
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;






















