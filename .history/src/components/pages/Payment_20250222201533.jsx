import React from 'react';
import { useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

function Payment({ cart }) {
  const total = cart.reduce((sum, item) => {
    const price = item.price === 'Free' ? 0 : parseFloat(item.price.replace(/,/g, ''));
    return sum + price;
  }, 0);

  const transaction_uuid = uuidv4();
  
  const Message = `total_amount=${total},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  const hash = CryptoJS.HmacSHA256(Message, '8gBm/:&EnhH.1/q');
  const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center mt-10 shadow-2xl shadow-slate-400 w-80 mb-8 h-80 font-medium pt-4 text-2xl">
        <h1>Payment</h1>
        <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
          <input type="hidden" id="amount" name="amount" value={total} required />
          <input type="hidden" id="tax_amount" name="tax_amount" value="0" required />
          <input type="hidden" id="total_amount" name="total_amount" value={total} required />
          <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={transaction_uuid} required />
          <input type="hidden" id="product_code" name="product_code" value="EPAYTEST" required />
          <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required />
          <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
          <input type="hidden" id="success_url" name="success_url" value="http://localhost:5173/" required />
          <input type="hidden" id="failure_url" name="failure_url" value="http://localhost:5173/" required />
          <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
          <input type="hidden" id="signature" name="signature" value={hashInBase64} required />
          
          <h1 className="mt-4 mb-4">Total Amount : <span className="text-red-500">Rs. {total}</span></h1>
          <p className="bg-gray-200 text-black py-2 px-6 rounded-full">Pay On Cash</p>
              <p className="bg-teal-800 text-white py-2 px-6 rounded-full">Pay Through E-sewa</p>
          <input className="bg-blue-9500 cursor-p text-white p-2 ml-4 mb-4 mt-8 cursor-pointer rounded-lg w-54" value="Confirm payment" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Payment;
