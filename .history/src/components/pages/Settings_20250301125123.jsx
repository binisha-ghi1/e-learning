import React, { useState } from 'react';

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    location: '',
    email: '',
    contactNumber: '',
    skill: '',
    biography: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className='bg-gray-50 min-h-4justify-center items-center'>
      <div className='bg-white p-3 rounded-lg shadow-md w-full max-w-sm'>
        <h1 className='text-lg font-semibold text-center text-gray-700 mb-4'>Account Settings</h1>
        <form onSubmit={handleSubmit} className='space-y-3'>
          {/* First Name */}
          <div>
            <label htmlFor='firstName' className='text-sm text-gray-600'>First Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='John'
              value={formData.firstName}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor='lastName' className='text-sm text-gray-600'>Last Name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Doe'
              value={formData.lastName}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor='username' className='text-sm text-gray-600'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='john_doe'
              value={formData.username}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor='password' className='text-sm text-gray-600'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='••••••••'
              value={formData.password}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor='location' className='text-sm text-gray-600'>Location</label>
            <input
              type='text'
              id='location'
              name='location'
              placeholder='City, Country'
              value={formData.location}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor='email' className='text-sm text-gray-600'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='example@mail.com'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor='contactNumber' className='text-sm text-gray-600'>Contact Number</label>
            <input
              type='text'
              id='contactNumber'
              name='contactNumber'
              placeholder='+123456789'
              value={formData.contactNumber}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Skills */}
          <div>
            <label htmlFor='skill' className='text-sm text-gray-600'>Skills/Occupation</label>
            <input
              type='text'
              id='skill'
              name='skill'
              placeholder='e.g., Web Developer'
              value={formData.skill}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Biography */}
          <div>
            <label htmlFor='biography' className='text-sm text-gray-600'>Biography</label>
            <textarea
              id='biography'
              name='biography'
              placeholder='Tell us about yourself'
              value={formData.biography}
              onChange={handleChange}
              rows='2'
              className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Buttons */}
          <div className='flex justify-between'>
            <button type='button' className='px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none'>
              Cancel
            </button>
            <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none'>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;



