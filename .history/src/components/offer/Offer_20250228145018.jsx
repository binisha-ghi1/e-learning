import React, { useState, useEffect } from 'react';

const Offer = () => {
  // State to control the visibility of the pop-up
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Show the pop-up after the component mounts (1 second delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000); // 1 second delay

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Function to close the pop-up
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      {/* Pop-up overlay */}
      {isPopupVisible && (
        <div className="fixed inset-0  flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl text-center w-11/12 max-w-md shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">January Special Offer!</h2>
            <p className="mb-6 text-lg font-medium text-gray-700">
              Get
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y_0ozYrHjzmyzDdZcMHeh8OM82BIbjuTlg&s" 
                alt="Discount" 
                className="inline-block mx-2 w-16 h-16 rounded-full"
              /> 
              on every enrolled subject!
            </p>
            <img 
              src="https://png.pngtree.com/png-vector/20230214/ourmid/pngtree-limited-time-offer-vector-design-png-image_6566272.png" 
              alt="Offer Image" 
              className="w-full rounded-xl mb-6 object-contain"
            />
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Hurry Up! And Join the Class Now.</h2>
            <button
              className="bg-green-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-green-400 focus:outline-none transition duration-200"
              onClick={closePopup}
            >
              Claim Offer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
