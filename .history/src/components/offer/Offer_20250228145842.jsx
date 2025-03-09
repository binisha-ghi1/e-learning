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
      {/* Pop-up overlay with transparent background */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-opacity-25 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-3xl text-center w-2/5 max-w-sm shadow-3xl relative">
            {/* Close cross button at the top-right corner */}
            <button
              className="absolute -top-3 right-2 text-red-700 text-4xl"
              onClick={closePopup}
            >
              &times; {/* Unicode for cross symbol */}
            </button>
            <h2 className="text-4xl font-bold mb-4 pt-8 text-blue-950 italic">January Special Offer!</h2>
            <p className="mb-4 text-base font-medium text-gray-700">
              Get
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y_0ozYrHjzmyzDdZcMHeh8OM82BIbjuTlg&s" 
                alt="Discount" 
                className="inline-block mx-2 w-12 h-12 rounded-full"
              /> 
              on every enrolled subject!
            </p>
            <img 
              src="https://png.pngtree.com/png-vector/20230214/ourmid/pngtree-limited-time-offer-vector-design-png-image_6566272.png" 
              alt="Offer Image" 
              className="w-full rounded-xl mb-4 object-contain"
            />
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Hurry Up! And Join the Class Now.</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;


