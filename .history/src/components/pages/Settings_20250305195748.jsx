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
    profilepicture:
  });

  const [isSuccess, setIsSuccess] = useState(false);  // For showing success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate updating data (replace this with actual API call if needed)
    console.log('Form Submitted:', formData);

    // Simulate success response (e.g., after API call success)
    setIsSuccess(true);

    // Optionally, you can clear the form after submitting
    // setFormData({
    //   firstName: '',
    //   lastName: '',
    //   username: '',
    //   password: '',
    //   location: '',
    //   email: '',
    //   contactNumber: '',
    //   skill: '',
    //   biography: '',
    // });
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
          <div>
            <label className='block mb-1' htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              className='p-2 border rounded w-full'
            />
          </div>
          <div>
            <label className='block mb-1' htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className='p-2 border rounded w-full'
            />
          </div>
          <div>
            <label className='block mb-1' htmlFor='location'>Location</label>
            <input
              type='text'
              name='location'
              placeholder='Location'
              value={formData.location}
              onChange={handleChange}
              className='p-2 border rounded w-full'
            />
          </div>
          <div>
            <label className='block mb-1' htmlFor='email'>E-mail</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='p-2 border rounded w-full'
            />
          </div>
          <div>
            <label className='block mb-1' htmlFor='contactNumber'>Contact Number</label>
            <input
              type='text'
              name='contactNumber'
              placeholder='Contact Number'
              value={formData.contactNumber}
              onChange={handleChange}
              className='p-2 border rounded w-full'
            />
          </div>
          <div>
            <label className='block mb-1' htmlFor='skill'>Skills/Occupation</label>
            <input
              type='text'
              name='skill'
              placeholder='Skill/Occupation'
              value={formData.skill}
              onChange={handleChange}
              className='p-2 border rounded w-full'
            />
          </div>
          <div className='col-span-2'>
            <label className='block mb-1' htmlFor='biography'>Biography</label>
            <textarea
              name='biography'
              placeholder='Biography'
              value={formData.biography}
              onChange={handleChange}
              className='p-2 border rounded w-full'
            />
          </div>
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



