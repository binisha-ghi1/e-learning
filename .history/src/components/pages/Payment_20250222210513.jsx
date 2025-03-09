import React from 'react';
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

function Payment({ cart }) {
  const total = cart.reduce((sum, item) => {
    const price = item.price === 'Free' ? 0 : parseFloat(item.price.replace(/,/g, ''));
    return sum + price;
  }, 0);

  const transaction_uuid = uuidv4();
  
  // Generate HMAC signature
  const Message = `total_amount=${total},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  const hash = CryptoJS.HmacSHA256(Message, '8gBm/:&EnhH.1/q');
  const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  // Encode transaction data for the success page
  const transactionData = {
    transaction_uuid,
    total_amount: total,
    status: "success",
  };
  import React from "react";
  import { useSearchParams, NavLink } from "react-router-dom";
  
  const Success = () => {
    const [searchParams] = useSearchParams();
    const data = searchParams.get("data");
  
    let newData = null;
    try {
      if (data) {
        const decodedData = JSON.parse(atob(data));
        newData = decodedData;
        console.log("Decoded Transaction Data:", newData);
      }
    } catch (error) {
      console.error("Error decoding transaction data:", error);
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
  

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center mt-10 shadow-2xl shadow-slate-400 w-80 mb-8 h-80 font-medium pt-4 text-2xl">
        <h1>Payment</h1>
        <form 
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" 
          method="POST"
        >
          <input type="hidden" name="amount" value={total} required />
          <input type="hidden" name="tax_amount" value="0" required />
          <input type="hidden" name="total_amount" value={total} required />
          <input type="hidden" name="transaction_uuid" value={transaction_uuid} required />
          <input type="hidden" name="product_code" value="EPAYTEST" required />
          <input type="hidden" name="product_service_charge" value="0" required />
          <input type="hidden" name="product_delivery_charge" value="0" required />

          {/* Send encoded transaction data in the success URL */}
          <input type="hidden" name="success_url" value={`http://localhost:5173/success?data=${encodedData}`} required />
          <input type="hidden" name="failure_url" value="http://localhost:5173/failure" required />

          <input type="hidden" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
          <input type="hidden" name="signature" value={hashInBase64} required />
          
          <h1 className="mt-4 mb-4">Total Amount : <span className="text-red-500">Rs. {total}</span></h1>
          <p className="bg-gray-200 text-black py-2 px-6 ">Pay On Cash</p>
          <p className="bg-teal-800 text-white py-2 px-6 ">Pay Through E-sewa</p>
          <input className="bg-blue-950 text-white p-2 ml-4 mb-4 mt-8 cursor-pointer rounded-lg w-54" value="Confirm payment" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Payment;

