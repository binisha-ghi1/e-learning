import { NavLink } from "react-router-dom";
import esewa from "../../assets/images/esewa.png";
import emptyWishlistImg from "../../assets/images/wishlist.png"; 

const Wishlist = ({ wishlist, setWishlist }) => {
  const removeFromWishlist = (courseId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((course) => course.id !== courseId)
    );
  };


  const total = wishlist.reduce((acc, item) => {
    if (item.price !== "Free") {
      return acc + parseFloat(item.price.replace(/[^0-9.]/g, ""));
    }
    return acc;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
          <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-8 text-center">Your Wishlist</h2>
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
                    <p className="text-sm text-gray-600">
                      {item.price === "Free" ? "Free" : `Rs. ${item.price}`}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 focus:outline-none transition-all duration-300"
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
                <NavLink to="/payment" className="mb-4">
                  <img src={esewa} alt="Esewa" className="w-32 sm:w-40" />
                </NavLink>
                <p className="text-xl text-gray-600 underline">
                  Or pay on cash at the center
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

