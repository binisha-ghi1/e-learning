import React, { useState, useEffect } from 'react';

const OfferPopup = () => {
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
        <div style={overlayStyles}>
          <div style={popupBoxStyles}>
            <h2>Special Offer!</h2>
            <p>Get 20% off on your first purchase!</p>
            <img src="https://via.placeholder.com/150" alt="Offer Image" style={imageStyles} />
            <br />
            <button style={buttonStyles} onClick={closePopup}>
              Claim Offer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the popup (you can move these to a separate CSS file if needed)
const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupBoxStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const imageStyles = {
  maxWidth: '100%',
  borderRadius: '8px',
};

const buttonStyles = {
  backgroundColor: '#28a745', // Green button
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default Offer;
