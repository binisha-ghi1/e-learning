// CartPage.jsx
import cart from '../../assets/images/cart.png'

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index)); // Removes item by index
  };

  return (
    <div className='bg-gray-200'>
      <div className="p-8">
        <h2 className="text-3xl text-blue-950 font-bold mb-6 ml-20">Cart</h2>
        {cart.length === 0 ? (
          <p className='pl-20 text-xl text-blue-950 font-medium'>0 Course in Cart</p>
         <img src={cart} alt="" className="src" />
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b py-2">
                <div className="flex justify-center items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <p>{item.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>{item.price}</span>
                  <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartPage;










