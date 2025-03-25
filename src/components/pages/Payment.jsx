import React from 'react';
import { useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

function Payment() {
  const location = useLocation();
  const { items = [], total = 0 } = location.state || {};

 
  console.log("Payment received items:", items);
  console.log("Payment received total:", total);

  const transaction_uuid = uuidv4();
  const message = `total_amount=${total},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  const hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  const transactionData = {
    transaction_uuid,
    total_amount: total,
    items,
    status: "pending",
  };
  const encodedData = btoa(JSON.stringify(transactionData));

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center mt-10 shadow-2xl shadow-slate-400 w-80 mb-8 h-80 font-medium pt-4 text-2xl bg-white rounded-lg">
        <h1 className="text-blue-950">Payment</h1>
        
        {total > 0 ? (
          <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
            <input type="hidden" name="amount" value={total} required />
            <input type="hidden" name="tax_amount" value="0" required />
            <input type="hidden" name="total_amount" value={total} required />
            <input type="hidden" name="transaction_uuid" value={transaction_uuid} required />
            <input type="hidden" name="product_code" value="EPAYTEST" required />
            <input type="hidden" name="product_service_charge" value="0" required />
            <input type="hidden" name="product_delivery_charge" value="0" required />
            <input type="hidden" name="success_url" value={`http://localhost:5173/success?data=${encodedData}`} required />
            <input type="hidden" name="failure_url" value="http://localhost:5173/failure" required />
            <input type="hidden" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
            <input type="hidden" name="signature" value={hashInBase64} required />
            
            <h1 className="mt-4 text-center text-blue-950 mb-4">
              Total Amount: <span className="text-red-500">Rs. {total.toLocaleString()}</span>
            </h1>
            <button
              type="submit"
              className="bg-blue-950 text-white p-2 w-54 cursor-pointer rounded-lg hover:bg-blue-900 transition-colors"
            >
              Confirm Payment
            </button>
          </form>
        ) : (
          <div className="text-center p-4">
            <p className="text-red-500">No payable items in cart</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;






