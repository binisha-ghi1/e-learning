import React, { useState } from 'react';
import { useUser } from './components/Usercontext/Usercontext'  // Import the useUser hook

const Settings = () => {
  const { userData, updateUser } = useUser();  // Access the user data and update function
  const [formData, setFormData] = useState(userData);  // Set initial form data from userContext

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData(userData);  // Reset to original data
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data in the context
    updateUser(formData);
    setIsSuccess(true);
  };

  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-2xl'>
        <h1 className='text-2xl font-semibold mb-6'>Settings</h1>

        {/* Success message */}
        {isSuccess && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
            <p>Changes saved successfully!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
          {/* Form Fields (same as before) */}
          <div>
            <label className='block mb-1' htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              className='p-2 border rounded w-full'
            />
          </div>
          <div>
            <label className='block mb-1' htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              className='p-2 border rounded w-full'
            />
          </div>
          {/* Add the rest of your form fields here... */}
          <div className='col-span-2 flex justify-end gap-4 mt-4'>
            <button
              type='button'
              onClick={handleReset}
              className='px-4 py-2 bg-gray-400 text-white rounded'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded'
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;




