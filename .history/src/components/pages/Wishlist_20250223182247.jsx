import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Wishlist = ({ wishlist }) => {
  return (
    <div className="min-h-screen bg-gray-200 pt-20">
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
        {wishlist.length > 0 ? (
          wishlist.map((course) => (
            <div key={course.id} className="border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold">{course.name}</h2>
              <p>{course.price === 'Free' ? 'Free' : `Price: ${course.price}`}</p>
              <NavLink to={`/course/${course.id}`}>
                <button className="mt-2 bg-yellow-400 text-blue-950 py-2 px-6 rounded-full hover:bg-yellow-500">
                  View Course
                </button>
              </NavLink>
            </div>
          ))
        ) : (
          <p>No items in your wishlist.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;


