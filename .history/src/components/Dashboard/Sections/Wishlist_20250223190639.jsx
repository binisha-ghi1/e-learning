import React from 'react';

const WishlistContent = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {['Advanced Python', 'Data Science Basics', 'Mobile App Development'].map((course, index) => (
        <div key={index} className="border rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{course}</h3>
            <p className="text-gray-600 text-sm">Added on Feb 20, 2024</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Enroll Now
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default WishlistContent;