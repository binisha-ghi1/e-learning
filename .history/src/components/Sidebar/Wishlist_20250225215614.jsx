import { NavLink } from "react-router-dom";


const Wishlist = ({ wishlist, setWishlist }) => {
    const removeFromWishlist = (courseId) => {
        setWishlist(prevWishlist => prevWishlist.filter(course => course.id !== courseId));
    };

    return (
        <div className="min-h-screen bg-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-950 mb-8">Cart</h2>
          {cart.length === 0 ? (
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <p className="text-xl text-blue-950 pb-5">Empty Wishlist!</p>
              <img src={wishlist} alt="Empty Wishlist" className="mx-auto w-40 pb-5"/>
              <NavLink to="/courses" className="text-blue-950 text-xl font-medium hover:underline">Browse Courses</NavLink>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8">
              <ul className="space-y-4">
                {wishlist.map((item) => (
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
              <div className="mt-6 flex justify-between items-center ">
                <div className='flex  flex-col items-start justify-start mt-20'>
                  <div className='flex bg-white text-center pl-10 pr-10 pt-10 pb-10 rounded-2xl shadow-md shadow-blue-800'>
                <p className="text-2xl font-semibold  text-black">Total: <br/>  <span className=' text-red-600 text-underline'>Rs. {total.toLocaleString()} </span>  </p>
                </div>
                <p className='text-2xl mt-10'>Payment Options :</p>
                <NavLink to="/payment" className="mt-2 py-2 px-6 rounded-full">
                  <img src={esewa} alt="" className="w-32" />
                </NavLink>
                <p className=' text-black underline text-2xl  mt-2 ml-8 '>On Cash</p>
                
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

export default Wishlist;
