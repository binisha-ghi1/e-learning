import React from 'react';
import { NavLink } from 'react-router-dom'; 

 function Failure ()  {
  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl text-blue-950 font-bold mb-4">Payment Failed</h2>
        <img  className='ml-40 w-20 h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6GZDPgrHPrXMeUR4EMUIXq3pv6wQXZXwFcWx2rbGczwjdIMDLsapsSDp8AcfCMSaa28&usqp=CAU'/>
        <p className="text-gray-700 mb-4">
          Unfortunately, your payment could not be processed. Please try again.
        </p>
        <p className="text-gray-600 mb-4">
          If the problem persists, please contact customer support.
        </p>
        <NavLink to="/payment" className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-0">
          Retry Payment
        </NavLink>
        <div className="mt-2">
          <NavLink to="/" className="text-medium text-blue-950 hover:underline">
            Go to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Failure;