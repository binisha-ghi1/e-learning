import React, { useState, useEffect } from 'react';
import fifty  from '../../assets/images/fifty.jpg'
import limited  from '../../assets/images/limited.png'

const Offer = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-opacity-25 flex justify-center items-center z-50">
          <div className="bg-yellow-300 p-4 rounded-2xl text-center w-64 max-w-xs shadow-md shadow-gray-400 relative">
            <button
              className="absolute -top-2 right-2 cursor-pointer text-red-600 text-2xl"
              onClick={closePopup}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-blue-950 italic">Special Offer!</h2>
            <p className="text-xl text-gray-700">
              Get <img 
                src={fifty} 
                alt="Discount" 
                className="inline-block mx-1 w-10 h-10 rounded-full"
              /> on every enrolled subject!
            </p>
            <p className="text-red-700 text-xl mt-2">New  python course added on IT Course.</p>
            <img 
              src={limited}
              alt="Offer Image" 
              className="w-40 mx-auto mt-2"
            />
            <h2 className="text-medium font-semibold mt-2 text-gray-800">Hurry Up! Join Now.</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;



