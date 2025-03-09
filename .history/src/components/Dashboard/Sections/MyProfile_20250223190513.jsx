import React from 'react';

const MyProfile = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6">My Profile</h2>
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <img src="/api/placeholder/100/100" alt="Profile" className="rounded-full" />
        <div>
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">Web Development Student</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Email</p>
          <p className="font-medium">john.doe@example.com</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Phone</p>
          <p className="font-medium">+1 234 567 890</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Location</p>
          <p className="font-medium">New York, USA</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Joined</p>
          <p className="font-medium">January 2024</p>
        </div>
      </div>
    </div>
  </div>
);

export default MyProfile;