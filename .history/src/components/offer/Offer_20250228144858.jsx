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
          <div className="bg-white p-6 rounded-lg text-center w-72 shadow-lg">
            <h2 className="text-3xl font-bold mb-4"> January Special Offer!</h2>
            <p className="mb-4 text-xl font-medium"><Getimg className="src"></Getimg>  on every enrolled subjects!</p>
            <img src="https://png.pngtree.com/png-vector/20230214/ourmid/pngtree-limited-time-offer-vector-design-png-image_6566272.png" alt="Offer Image" className="w-full rounded-lg mb-4" />
            <h2 className="text-3xl font-bold mb-4">Hurry Up! And Join the class Now.</h2>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-400 focus:outline-none"
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
