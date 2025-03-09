import React from "react";
import { useSearchParams, NavLink } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const data = searchParams.get("data");

  let newData = null;
  if (data) {
    try {
      const decodedString = decodeURIComponent(escape(atob(data))); // Fix decoding
      newData = JSON.parse(decodedString);
      console.log("Decoded Data:", newData);
    } catch (error) {
      console.error("Error decoding transaction data:", error);
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
        <img
          className="ml-40 w-20 h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQMjRJr7hkrsyPfmwybCN1vkKF_CmgkiTpg&s"
          alt="Success"
        />

        {newData ? (
          <>
            <p className="text-gray-700 mb-4">
              Thank you for your payment. Your transaction has been completed successfully.
            </p>
            <p className="text-gray-600 mb-4">
              A confirmation email has been sent to your registered email address.
            </p>
            <p className="text-gray-600 mb-4">
              Transaction ID: <span className="font-semibold text-red-500">{newData.transaction_uuid}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Transaction Amount: <span className="text-red-600 font-semibold">Rs. {newData.total_amount}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Status: <span className="font-semibold text-green-600">{newData.status}</span>
            </p>
          </>
        ) : (
          <p className="text-red-500">Invalid transaction data.</p>
        )}

        <NavLink
          to="/"
          className="mt-4 inline-block bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700"
        >
          Go to Home
        </NavLink>
      </div>
    </div>
  );
};

export default Success;


