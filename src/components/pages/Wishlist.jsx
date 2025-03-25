import { NavLink, useNavigate } from "react-router-dom";
import esewa from "../../assets/images/esewa.png";
import emptyWishlistImg from "../../assets/images/wishlist.png";
import { useContext } from "react";
import { WishContext } from "../wishcontext/WishContext";

const Wishlist = () => {
  const { wishlist, dispatch } = useContext(WishContext);
  const navigate = useNavigate();

  const removeFromWISHLIST = (courseId) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id: courseId } });
  };

 
  const total = wishlist.reduce((sum, item) => {
    const price = item.price === "Free" ? 0 : parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return sum + price * (item.qty || 1);
  }, 0);

  const handleProceedToPayment = () => {
    const payableItems = wishlist
      .filter(item => item.price !== "Free")
      .map(item => ({
        ...item,
        qty: item.qty || 1 
      }));

    if (payableItems.length === 0) {
      alert("No payable items in your wishlist");
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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-8 text-center">
          Your Wishlist
        </h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {wishlist.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center shadow-xl">
              <p className="text-2xl font-semibold text-blue-950 pb-5">
                Your Wishlist is Empty!
              </p>
              <img
                src={emptyWishlistImg}
                alt="Empty Wishlist"
                className="mx-auto w-72 pb-5"
              />
              <NavLink
                to="/courses"
                className="text-blue-950 text-xl font-medium hover:underline"
              >
                Browse Courses and Add to Wishlist
              </NavLink>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <ul className="space-y-6">
                {wishlist.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg mr-6"
                    />
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-blue-950">
                        {item.name}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-gray-600">
                          {item.price === "Free" ? "Free" : `Rs. ${item.price}`}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromWISHLIST(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors text-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center sm:flex-row sm:justify-between">
                <div className="flex bg-white text-center p-6 rounded-2xl shadow-lg w-full sm:w-auto mb-6 sm:mb-0">
                  <p className="text-xl font-semibold text-black">
                    Total: <br />
                    <span className="text-red-600 text-lg">
                      Rs. {total.toLocaleString()}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col items-center sm:items-start">
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                    Book your class at just 2,000 through e-sewa
                  </p>
                  <button
                    onClick={handleProceedToPayment}
                    className="mt-4 p-2 bg-transparent hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <img src={esewa} alt="Esewa" className="w-32 sm:w-40" />
                  </button>
                  <p className="text-xl text-gray-600 underline mt-2">
                    Or pay in cash at the center
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
